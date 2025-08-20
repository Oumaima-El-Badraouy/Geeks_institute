-- Exercise 1: DVD Rentals

-- 1️ Get all rentals which are out (not returned)
SELECT *
FROM rental
WHERE return_date IS NULL;

-- 2️ Get all customers who have not returned their rentals, grouped by customer
SELECT c.customer_id, c.first_name, c.last_name, COUNT(r.rental_id) AS outstanding_rentals
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

-- 3️ Get all Action films with Joe Swank
SELECT f.title, f.description, a.first_name, a.last_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Action' AND a.first_name='Joe' AND a.last_name='Swank';

-- Optional shortcut: create a view for outstanding rentals
CREATE OR REPLACE VIEW outstanding_rentals AS
SELECT r.rental_id, r.rental_date, r.inventory_id, r.customer_id
FROM rental r
WHERE r.return_date IS NULL;

-- Exercise 2: Happy Halloween

-- 1️ How many stores there are, and city/country info
SELECT s.store_id, a.city_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- 2️ Total viewing hours per store (sum of length of inventory items)
-- Exclude items not yet returned
SELECT s.store_id, SUM(f.length) AS total_minutes,
       SUM(f.length)/60.0 AS total_hours,
       SUM(f.length)/(60.0*24) AS total_days
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- 3️ List of all customers in cities where stores are located
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city IN (SELECT ci2.city
                  FROM store s
                  JOIN address a2 ON s.address_id = a2.address_id
                  JOIN city ci2 ON a2.city_id = ci2.city_id);

-- 4️ List of all customers in countries where stores are located
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country IN (SELECT co2.country
                     FROM store s
                     JOIN address a2 ON s.address_id = a2.address_id
                     JOIN city ci2 ON a2.city_id = ci2.city_id
                     JOIN country co2 ON ci2.country_id = co2.country_id);

--  Safe list of movies (excluding Horror and scary words)
SELECT f.title, f.length,
       SUM(f.length) OVER () AS total_minutes,
       SUM(f.length) OVER ()/60.0 AS total_hours,
       SUM(f.length) OVER ()/(60.0*24) AS total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE '%beast%'
  AND f.title NOT ILIKE '%monster%'
  AND f.title NOT ILIKE '%ghost%'
  AND f.title NOT ILIKE '%dead%'
  AND f.title NOT ILIKE '%zombie%'
  AND f.title NOT ILIKE '%undead%'
  AND f.description NOT ILIKE '%beast%'
  AND f.description NOT ILIKE '%monster%'
  AND f.description NOT ILIKE '%ghost%'
  AND f.description NOT ILIKE '%dead%'
  AND f.description NOT ILIKE '%zombie%'
  AND f.description NOT ILIKE '%undead%';

