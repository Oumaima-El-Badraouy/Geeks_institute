from flask import Flask, request, jsonify,render_template,redirect,url_for,flash
from models import db, Event, Organizer, Attendee, Ticket   
import os
import datetime
import dotenv
dotenv.load_dotenv()
app= Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.getenv('SECRET_KEY')
db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/events', methods=['GET'])
def list_events():
    search_query = request.args.get('q', '')
    if search_query:
        events = Event.query.filter(
            Event.name.ilike(f"%{search_query}%") | Event.location.ilike(f"%{search_query}%")
        ).all()
    else:
        events = Event.query.all()
    return render_template('index.html', events=events, search_query=search_query)

@app.route('/event/<int:event_id>', methods=['GET'])
def event_detail(event_id):
    event = Event.query.get_or_404(event_id)
    return render_template('event_detail.html', event=event)
@app.route('/create_event', methods=['GET', 'POST'])
def create_event():
    if request.method == 'POST':
        name = request.form['name']
        description = request.form['description']
        date = datetime.datetime.strptime(request.form['date'], '%Y-%m-%d %H:%M')
        location = request.form['location']
        new_event = Event(name=name, description=description, date=date, location=location)
        db.session.add(new_event)
        db.session.commit()
        flash('Event created successfully!')
        return redirect(url_for('list_events'))
    return render_template('create_event.html')
@app.route('/edit_event/<int:event_id>', methods=['GET', 'POST'])
def edit_event(event_id):
    event = Event.query.get_or_404(event_id)
    if request.method == 'POST':
        event.name = request.form['name']
        event.description = request.form['description']
        event.date = datetime.datetime.strptime(request.form['date'], '%Y-%m-%d %H:%M')
        event.location = request.form['location']
        db.session.commit()
        flash('Event updated successfully!')
        return redirect(url_for('event_detail', event_id=event.id))
    return render_template('edit_event.html', event=event)
@app.route('/delete_event/<int:event_id>', methods=['POST'])
def delete_event(event_id):
    event = Event.query.get_or_404(event_id)
    db.session.delete(event)
    db.session.commit()
    flash('Event deleted successfully!')
    return redirect(url_for('list_events'))





#####################################################################################


@app.route('/organizers', methods=['GET'])
def list_organizers():
    organizers = Organizer.query.all()
    return render_template('organizer.html', organizers=organizers)

@app.route('/organizer/<int:organizer_id>', methods=['GET'])
def organizer_detail(organizer_id):
    organizer = Organizer.query.get_or_404(organizer_id)
    return render_template('organizer_detail.html', organizer=organizer)

@app.route('/create_organizer', methods=['GET', 'POST'])
def create_organizer():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']

        new_organizer = Organizer(name=name, email=email, phone=phone)
        db.session.add(new_organizer)
        db.session.commit()
        flash('Organizer created successfully!')
        return redirect(url_for('index'))
    return render_template('create_organizer.html')
@app.route('/edit_organizer/<int:organizer_id>', methods=['GET', 'POST'])
def edit_organizer(organizer_id):
    organizer = Organizer.query.get_or_404(organizer_id)
    if request.method == 'POST':
        organizer.name = request.form['name']
        organizer.email = request.form['email']
        organizer.phone = request.form['phone']
        db.session.commit()
        flash('Organizer updated successfully!')
        return redirect(url_for('organizer_detail', organizer_id=organizer.id))
    return render_template('edit_organizer.html', organizer=organizer)
@app.route('/delete_organizer/<int:organizer_id>', methods=['POST'])
def delete_organizer(organizer_id):
    organizer = Organizer.query.get_or_404(organizer_id)
    db.session.delete(organizer)
    db.session.commit()
    flash('Organizer deleted successfully!')
    return redirect(url_for('list_organizers'))



#####################################################################################



@app.route('/attendees', methods=['GET'])
def list_attendees():
    attendees = Attendee.query.all()
    return render_template('attendee.html', attendees=attendees)

@app.route('/Attendee/<int:attendee_id>', methods=['GET'])
def attendee_detail(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    return render_template('attendee_detail.html', attendee=attendee)

@app.route('/create_Attendee', methods=['GET', 'POST'])
def create_attendee():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']

        new_attendee = Attendee(name=name, email=email, phone=phone)
        db.session.add(new_attendee)
        db.session.commit()
        flash('Attendee created successfully!')
        return redirect(url_for('index'))
    return render_template('create_attendee.html')
@app.route('/edit_attendee/<int:attendee_id>', methods=['GET', 'POST'])
def edit_attendee(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    if request.method == 'POST':
        attendee.name = request.form['name']
        attendee.email = request.form['email']
        attendee.phone = request.form['phone']
        db.session.commit()
        flash('Attendee updated successfully!')
        return redirect(url_for('attendee_detail', attendee_id=attendee.id))
    return render_template('edit_attendee.html', attendee=attendee)
@app.route('/delete_attendee/<int:attendee_id>', methods=['POST'])
def delete_attendee(attendee_id):
    attendee = Attendee.query.get_or_404(attendee_id)
    db.session.delete(attendee)
    db.session.commit()
    flash('Attendee deleted successfully!')
    return redirect(url_for('list_attendees'))






#####################################################################################



@app.route('/tickets', methods=['GET'])
def list_tickets():
    tickets = Ticket.query.all()
    return render_template('ticket.html', tickets=tickets)

@app.route('/ticket/<int:ticket_id>', methods=['GET'])
def ticket_detail(ticket_id):
    ticket = Ticket.query.get_or_404(ticket_id)
    return render_template('ticket_detail.html', ticket=ticket)

@app.route('/create_Ticket', methods=['GET', 'POST'])
def create_ticket():
    if request.method == 'POST':
        event_id = request.form['event_id']
        attendee_id = request.form['attendee_id']
        price = request.form['price']

        new_ticket = Ticket(event_id=event_id, attendee_id=attendee_id, price=price)
        db.session.add(new_ticket)
        db.session.commit()
        flash('Ticket created successfully!')
        return redirect(url_for('index3'))
    return render_template('create_ticket.html')

@app.route('/edit_ticket/<int:ticket_id>', methods=['GET', 'POST'])
def edit_ticket(ticket_id):
    ticket = Ticket.query.get_or_404(ticket_id)
    if request.method == 'POST':
        ticket.event_id = request.form['event_id']
        ticket.attendee_id = request.form['attendee_id']
        ticket.price = request.form['price']
        db.session.commit()
        flash('Ticket updated successfully!')
        return redirect(url_for('ticket_detail', ticket_id=ticket.id))
    return render_template('edit_ticket.html', ticket=ticket)

@app.route('/delete_ticket/<int:ticket_id>', methods=['POST'])
def delete_ticket(ticket_id):
    ticket = Ticket.query.get_or_404(ticket_id)
    db.session.delete(ticket)
    db.session.commit()
    flash('Ticket deleted successfully!')
    return redirect(url_for('list_tickets'))



if __name__=="__main__":
    app.run(debug=True,port=5000)

