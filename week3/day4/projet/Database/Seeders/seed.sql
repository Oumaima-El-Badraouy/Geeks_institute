CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    location VARCHAR(100) NOT NULL
);
CREATE TABLE organizers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
);
CREATE TABLE attendees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL
);
CREATE TABLE tickets(
    event_id INT REFERENCES events(id) ON DELETE CASCADE,
    attendee_id INT REFERENCES attendees(id) ON DELETE CASCADE,
    price DECIMAL(10, 2) NOT NULL
    
);
insert into events(name,description,date,location) values
('Tech Conference','Annual technology conference','2024-09-15 09:00:00','New York'),
('Music Festival','Outdoor music festival','2024-08-20 12:00:00','Los Angeles'),
('Art Expo','Exhibition of modern art','2024-10-05 10:00:00','San Francisco')
ON CONFLICT DO NOTHING;
insert into organizers(name,phone,email) values
('John Doe','1234567890','john.doe@example.com'),
('Jane Smith','0987654321','jane.smith@example.com');

insert into attendees(name,email,phone) values
('Alice Johnson','alice.johnson@example.com','1112223333'),
('Bob Brown','bob.brown@example.com','4445556666');

insert into tickets(event_id,attendee_id,price) values
(4,3,50.00),
(5,4,75.00) ON CONFLICT DO NOTHING;
