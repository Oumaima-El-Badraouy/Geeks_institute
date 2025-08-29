from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Event(db.Model):
    __tablename__ = "events"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    def __repr__(self):
        return f"<Event {self.id} - {self.name} - {self.description} - {self.date} - {self.location}>"
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "date": self.date.strftime("%Y-%m-%d %H:%M:%S") if self.date else None,
            "location": self.location
        }

class Organizer(db.Model):
    __tablename__ = "organizers"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=False)
    def __repr__(self):
        return f"<Organizer {self.id} - {self.name} - {self.email} - {self.phone}>"
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone
            
        }

class Attendee(db.Model):
    __tablename__ = "attendees"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    phone = db.Column(db.String(15), nullable=False)
    def __repr__(self):
        return f"<User {self.id} - {self.name} - {self.email} - {self.phone}>"
    
class Ticket(db.Model):
    __tablename__ = "tickets"
    id = db.Column(db.Integer, primary_key=True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), nullable=False)
    attendee_id = db.Column(db.Integer, db.ForeignKey('attendees.id'), nullable=False)
    price = db.Column(db.Float, nullable=False)
    def __repr__(self):
        return f"<Ticket {self.id} - Event ID: {self.event_id}, Attendee ID: {self.attendee_id}, Price: {self.price}>"

