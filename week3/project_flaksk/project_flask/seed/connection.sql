-- LANGUAGES
CREATE TABLE IF NOT EXISTS language (
    language_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- ACTORS
CREATE TABLE IF NOT EXISTS actor (
    actor_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- FILMS
CREATE TABLE IF NOT EXISTS film (
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    language_id INT REFERENCES language(language_id) ON DELETE SET NULL
);

-- FILM_ACTOR (Many-to-Many)
CREATE TABLE IF NOT EXISTS film_actor (
    film_id INT REFERENCES film(film_id) ON DELETE CASCADE,
    actor_id INT REFERENCES actor(actor_id) ON DELETE CASCADE,
    PRIMARY KEY(film_id, actor_id)
);
-- Insert languages
INSERT INTO language (name) VALUES 
('English'),
('French'),
('Spanish'),
('German'),
('Italian')
ON CONFLICT DO NOTHING;

-- Insert actors
INSERT INTO actor (name) VALUES 
('Tom Hanks'),
('Meryl Streep'),
('Brad Pitt'),
('Angelina Jolie'),
('Leonardo DiCaprio')
ON CONFLICT DO NOTHING;

-- Insert films
INSERT INTO film (title, description, language_id) VALUES
('Forrest Gump', 'Life story of Forrest', 1),
('The Post', 'Journalism drama', 2),
('Inception', 'Dreams and reality', 3),
('Mr. & Mrs. Smith', 'Action movie', 1),
('Catch Me If You Can', 'Biographical crime', 4)
ON CONFLICT DO NOTHING;

-- Insert film_actor relations (many-to-many)
INSERT INTO film_actor (film_id, actor_id) VALUES
(1,1), -- Forrest Gump -> Tom Hanks
(2,2), -- The Post -> Meryl Streep
(3,5), -- Inception -> Leonardo DiCaprio
(4,3), -- Mr & Mrs Smith -> Brad Pitt
(4,4)  -- Mr & Mrs Smith -> Angelina Jolie
ON CONFLICT DO NOTHING;
