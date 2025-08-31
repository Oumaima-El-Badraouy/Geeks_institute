from flask import Flask, render_template, request, redirect, url_for, flash
from config import Config
from database.index import db
from models.models import Organizer, Event, Attendee, Ticket
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateTimeField, SelectField
from wtforms.validators import DataRequired, Email
from math import ceil

class EventForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    date = DateTimeField('Date (YYYY-MM-DD HH:MM)', format='%Y-%m-%d %H:%M', validators=[DataRequired()])
    location = StringField('Location')
    description = TextAreaField('Description')
    organizer_id = SelectField('Organizer', coerce=int, validators=[DataRequired()])

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

def paginate(query, page, per_page=6):
    total = query.count()
    items = query.offset((page-1)*per_page).limit(per_page).all()
    pages = ceil(total / per_page) if total else 1
    return items, total, pages

@app.route('/events')
def events_list():
    q = request.args.get('q','').strip()
    page = int(request.args.get('page',1))
    base = Event.query.order_by(Event.date.desc())
    if q:
        base = base.filter(Event.name.ilike(f'%{q}%'))
    items, total, pages = paginate(base, page, per_page=6)
    return render_template('events/list.html', events=items, q=q, page=page, pages=pages)

if __name__ == '__main__':
    app.run(debug=True)
