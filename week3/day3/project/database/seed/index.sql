-- SQL schema & seeds (abrégé)
DROP TABLE IF EXISTS tickets CASCADE;
DROP TABLE IF EXISTS attendees CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS organizers CASCADE;

CREATE TABLE organizers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    contact_info TEXT
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    location VARCHAR(255),
    description TEXT,
    organizer_id INTEGER REFERENCES organizers(id) ON DELETE CASCADE
);

CREATE TABLE attendees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50)
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    attendee_id INTEGER REFERENCES attendees(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT now(),
    UNIQUE(event_id, attendee_id)
);
-- ========== Organizers ==========
INSERT INTO organizers (name, contact_info) VALUES
('Tech Hub', 'techhub@example.com'),
('Eventify', 'contact@eventify.com'),
('Global Meetups', 'info@globalmeetups.org'),
('Campus Life', 'campuslife@univ.edu'),
('Business Leaders', 'leaders@biz.com'),
('Art & Culture Org', 'arts@culture.com'),
('Startup Booster', 'hello@startupbooster.io'),
('Health First', 'support@healthfirst.org'),
('Music Vibes', 'musicvibes@gmail.com'),
('Sports United', 'sports@united.com');

-- ========== Events ==========
INSERT INTO events (name, date, location, description, organizer_id) VALUES
('Tech Conference 2025', '2025-09-10 10:00:00', 'Casablanca', 'Annual technology conference.', 1),
('Startup Pitch Night', '2025-10-05 18:30:00', 'Rabat', 'Pitch your startup idea.', 7),
('Music Festival', '2025-11-15 15:00:00', 'Marrakech', 'Live music and performances.', 9),
('Health Awareness Camp', '2025-09-20 09:00:00', 'Tangier', 'Free health checkups.', 8),
('Art Exhibition', '2025-09-25 14:00:00', 'Fes', 'Modern art gallery opening.', 6),
('Football Tournament', '2025-10-12 09:30:00', 'Casablanca', 'University sports league.', 10),
('Business Networking Gala', '2025-09-30 19:00:00', 'Rabat', 'Meet industry leaders.', 5),
('Coding Bootcamp', '2025-09-05 09:00:00', 'Online', 'Intensive coding session.', 1),
('Cultural Meetup', '2025-10-20 17:00:00', 'Agadir', 'Community cultural exchange.', 3),
('University Orientation', '2025-09-03 08:00:00', 'Kenitra', 'New students welcome.', 4);

-- ========== Attendees ==========
INSERT INTO attendees (name, email, phone) VALUES
('Ali Hassan', 'ali.hassan@example.com', '+212600000001'),
('Sara Benali', 'sara.benali@example.com', '+212600000002'),
('Youssef El Amrani', 'youssef.amrani@example.com', '+212600000003'),
('Meryem Othmani', 'meryem.othmani@example.com', '+212600000004'),
('Hicham Lahlou', 'hicham.lahlou@example.com', '+212600000005'),
('Khadija Idrissi', 'khadija.idrissi@example.com', '+212600000006'),
('Omar Fassi', 'omar.fassi@example.com', '+212600000007'),
('Fatima Zahra', 'fatima.zahra@example.com', '+212600000008'),
('Rachid Mansouri', 'rachid.mansouri@example.com', '+212600000009'),
('Salma Chafik', 'salma.chafik@example.com', '+212600000010'),
('Adil Bouziane', 'adil.bouziane@example.com', '+212600000011'),
('Nadia Skalli', 'nadia.skalli@example.com', '+212600000012'),
('Hamza Bensaid', 'hamza.bensaid@example.com', '+212600000013'),
('Laila Kabbaj', 'laila.kabbaj@example.com', '+212600000014'),
('Anas Ouarzazi', 'anas.ouarzazi@example.com', '+212600000015');

-- ========== Tickets ==========
INSERT INTO tickets (event_id, attendee_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(5, 8),
(6, 9),
(7, 10),
(8, 11),
(9, 12),
(10, 13),
(1, 14),
(2, 15);
