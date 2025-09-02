from database.index import db
from flask_login import UserMixin
from datetime import datetime

class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)  # hashed

class Organizer(db.Model):
    __tablename__ = 'organizers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    contact_info = db.Column(db.Text)
    events = db.relationship('Event', back_populates='organizer', cascade="all, delete-orphan")

class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(255))
    description = db.Column(db.Text)
    organizer_id = db.Column(db.Integer, db.ForeignKey('organizers.id', ondelete='CASCADE'))
    organizer = db.relationship('Organizer', back_populates='events')
    tickets = db.relationship('Ticket', back_populates='event', cascade="all, delete-orphan")

class Attendee(db.Model):
    __tablename__ = 'attendees'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    phone = db.Column(db.String(50))
    tickets = db.relationship('Ticket', back_populates='attendee', cascade="all, delete-orphan")

class Ticket(db.Model):
    __tablename__ = 'tickets'
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id', ondelete='CASCADE'))
    attendee_id = db.Column(db.Integer, db.ForeignKey('attendees.id', ondelete='CASCADE'))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    event = db.relationship('Event', back_populates='tickets')
    attendee = db.relationship('Attendee', back_populates='tickets')
    __table_args__ = (db.UniqueConstraint('event_id', 'attendee_id', name='uix_event_attendee'),)
