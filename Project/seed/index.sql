CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    genre VARCHAR(100) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL,
    year INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, description, genre, rating, year)
VALUES (
        'The Dark Knight',
        'A superhero movie about a superhero who fights crime.',
        'Action',
        9.0,
        2008
    ),
    (
        'Inception',
        'A movie about a man who steals ideas from people''s dreams.',
        'Sci-Fi',
        8.8,
        2010
    ),
    (
        'The Matrix',
        'A movie about a man who is a hacker and is part of a rebellion against the machines.',
        'Sci-Fi',
        8.7,
        1999
    ),
    (
        'The Lord of the Rings: The Fellowship of the Ring',
        'A hobbit embarks on a quest to destroy a powerful ring and save Middle-earth from evil.',
        'Fantasy',
        8.9,
        2001
    ),
    (
        'The Hobbit: An Unexpected Journey',
        'A hobbit joins a group of dwarves on an adventure to reclaim their mountain home from a dragon.',
        'Fantasy',
        7.8,
        2012
    ),
    (
        'Pulp Fiction',
        'Multiple interconnected stories of crime in Los Angeles featuring an ensemble cast.',
        'Crime',
        8.9,
        1994
    ),
    (
        'The Godfather',
        'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
        'Crime',
        9.2,
        1972
    ),
    (
        'Schindler''s List',
        'A German businessman saves the lives of more than a thousand Jewish refugees during the Holocaust.',
        'Drama',
        8.9,
        1993
    ),
    (
        'Fight Club',
        'An insomniac office worker and a mysterious soap maker form an underground fight club.',
        'Drama',
        8.8,
        1999
    ),
    (
        'Goodfellas',
        'The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners.',
        'Crime',
        8.7,
        1990
    )
;