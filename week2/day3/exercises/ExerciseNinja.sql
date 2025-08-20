SELECT f.film_id, f.title, f.rating, i.inventory_id
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;

CREATE TABLE waiting_list (
    waiting_id SERIAL PRIMARY KEY,
    child_name VARCHAR(50) NOT NULL,
    film_id INT NOT NULL REFERENCES film(film_id) ON DELETE CASCADE,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT f.title, COUNT(w.waiting_id) AS num_waiting
FROM film f
LEFT JOIN waiting_list w ON f.film_id = w.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.title
ORDER BY num_waiting DESC;

INSERT INTO waiting_list (child_name, film_id)
VALUES 
('Alice', 1),
('Bob', 2),
('Charlie', 1),
('Diana', 3);
