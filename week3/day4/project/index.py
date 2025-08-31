from flask import Flask, request, jsonify, redirect, url_for, flash
from config import Config
from database.index import db
from models.models import Organizer, Event, Attendee, Ticket, User
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateTimeField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from math import ceil
app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])

class EventForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    date = DateTimeField('Date (YYYY-MM-DD HH:MM)', format='%Y-%m-%d %H:%M', validators=[DataRequired()])
    location = StringField('Location')
    description = TextAreaField('Description')
    organizer_id = SelectField('Organizer', coerce=int, validators=[DataRequired()])

class OrganizerForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    contact_info = StringField('Contact Info')

class AttendeeForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    phone = StringField('Phone')
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
def paginate(query, page, per_page=6):
    total = query.count()
    items = query.offset((page-1)*per_page).limit(per_page).all()
    pages = ceil(total / per_page) if total else 1
    return items, total, pages

def to_dict_event(event):
    return {
        "id": event.id,
        "name": event.name,
        "date": event.date.strftime("%Y-%m-%d %H:%M"),
        "location": event.location,
        "description": event.description,
        "organizer_id": event.organizer_id
    }

def to_dict_organizer(org):
    return {"id": org.id, "name": org.name, "contact_info": org.contact_info}

def to_dict_attendee(att):
    return {"id": att.id, "name": att.name, "email": att.email, "phone": att.phone}

@app.before_request
def create_tables():
    db.create_all()
    if not User.query.filter_by(username="admin").first():
        user = User(username="admin", password=generate_password_hash("admin123"))
        db.session.add(user)
        db.session.commit()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data.get("username")).first()
    if user and check_password_hash(user.password, data.get("password")):
        login_user(user)
        return jsonify({"message":"Logged in successfully"}), 200
    return jsonify({"error":"Invalid credentials"}), 401

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message":"Logged out successfully"}), 200

@app.route('/events', methods=['GET'])
def events_list():
    q = request.args.get('q','').strip()
    page = int(request.args.get('page',1))
    base = Event.query.order_by(Event.date.desc())
    if q:
        base = base.filter(Event.name.ilike(f'%{q}%'))
    items, total, pages = paginate(base, page)
    return jsonify({
        "events":[to_dict_event(e) for e in items],
        "total": total,
        "page": page,
        "pages": pages
    })

@app.route('/events', methods=['POST'])
@login_required
def event_create():
    data = request.json
    e = Event(
        name=data["name"],
        date=data["date"],
        location=data.get("location"),
        description=data.get("description"),
        organizer_id=data["organizer_id"]
    )
    db.session.add(e)
    db.session.commit()
    return jsonify(to_dict_event(e)), 201

@app.route('/events/<int:event_id>', methods=['GET'])
def event_detail(event_id):
    e = Event.query.get_or_404(event_id)
    attendees = [to_dict_attendee(t.attendee) for t in e.tickets]
    return jsonify({"event":to_dict_event(e), "attendees": attendees})

@app.route('/events/<int:event_id>', methods=['PUT'])
@login_required
def event_edit(event_id):
    e = Event.query.get_or_404(event_id)
    data = request.json
    e.name = data.get("name", e.name)
    e.date = data.get("date", e.date)
    e.location = data.get("location", e.location)
    e.description = data.get("description", e.description)
    e.organizer_id = data.get("organizer_id", e.organizer_id)
    db.session.commit()
    return jsonify(to_dict_event(e))

@app.route('/events/<int:event_id>', methods=['DELETE'])
@login_required
def event_delete(event_id):
    e = Event.query.get_or_404(event_id)
    db.session.delete(e)
    db.session.commit()
    return jsonify({"message":"Event deleted"}), 200

@app.route('/events/<int:event_id>/register', methods=['POST'])
def event_register(event_id):
    e = Event.query.get_or_404(event_id)
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    if not (name and email):
        return jsonify({"error":"Name and email required"}), 400
    attendee = Attendee.query.filter_by(email=email).first()
    if not attendee:
        attendee = Attendee(name=name, email=email, phone=phone)
        db.session.add(attendee)
        db.session.commit()
    existing = Ticket.query.filter_by(event_id=event_id, attendee_id=attendee.id).first()
    if existing:
        return jsonify({"warning":"Already registered"}), 200
    t = Ticket(event_id=event_id, attendee_id=attendee.id)
    db.session.add(t)
    db.session.commit()
    return jsonify({"message":"Registration successful"}), 201
@app.route('/organizers', methods=['GET'])
def organizers_list():
    q = request.args.get('q','').strip()
    page = int(request.args.get('page',1))
    base = Organizer.query.order_by(Organizer.name)
    if q:
        base = base.filter(Organizer.name.ilike(f'%{q}%'))
    items, total, pages = paginate(base, page)
    return jsonify({
        "organizers":[to_dict_organizer(o) for o in items],
        "total": total,
        "page": page,
        "pages": pages
    })

@app.route('/organizers', methods=['POST'])
@login_required
def organizer_create():
    data = request.json
    o = Organizer(name=data["name"], contact_info=data.get("contact_info"))
    db.session.add(o)
    db.session.commit()
    return jsonify(to_dict_organizer(o)), 201

@app.route('/organizers/<int:organizer_id>', methods=['PUT'])
@login_required
def organizer_edit(organizer_id):
    o = Organizer.query.get_or_404(organizer_id)
    data = request.json
    o.name = data.get("name", o.name)
    o.contact_info = data.get("contact_info", o.contact_info)
    db.session.commit()
    return jsonify(to_dict_organizer(o))

@app.route('/organizers/<int:organizer_id>', methods=['DELETE'])
@login_required
def organizer_delete(organizer_id):
    o = Organizer.query.get_or_404(organizer_id)
    db.session.delete(o)
    db.session.commit()
    return jsonify({"message":"Organizer deleted"}), 200
@app.route('/attendees', methods=['GET'])
def attendees_list():
    q = request.args.get('q','').strip()
    page = int(request.args.get('page',1))
    base = Attendee.query.order_by(Attendee.name)
    if q:
        base = base.filter(Attendee.name.ilike(f'%{q}%'))
    items, total, pages = paginate(base, page)
    return jsonify({
        "attendees":[to_dict_attendee(a) for a in items],
        "total": total,
        "page": page,
        "pages": pages
    })

@app.route('/attendees', methods=['POST'])
@login_required
def attendee_create():
    data = request.json
    a = Attendee(name=data["name"], email=data["email"], phone=data.get("phone"))
    db.session.add(a)
    db.session.commit()
    return jsonify(to_dict_attendee(a)), 201

@app.route('/attendees/<int:attendee_id>', methods=['PUT'])
@login_required
def attendee_edit(attendee_id):
    a = Attendee.query.get_or_404(attendee_id)
    data = request.json
    a.name = data.get("name", a.name)
    a.email = data.get("email", a.email)
    a.phone = data.get("phone", a.phone)
    db.session.commit()
    return jsonify(to_dict_attendee(a))

@app.route('/attendees/<int:attendee_id>', methods=['DELETE'])
@login_required
def attendee_delete(attendee_id):
    a = Attendee.query.get_or_404(attendee_id)
    db.session.delete(a)
    db.session.commit()
    return jsonify({"message":"Attendee deleted"}), 200
if __name__ == '__main__':
    app.run(debug=True)
