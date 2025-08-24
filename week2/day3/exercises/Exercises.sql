select * from language
 select f.title,f.description,l.name from film f 
 inner join language l
 on f.language_id=l.language_id
 select f.title,f.description,l.name from film f 
 inner join language l
 on f.language_id!=l.language_id
 create table new_film (
id serial primary key,
name varchar(20)
 )
 insert into new_film (name) values  ('oumaima'),('sara'),('imane');
 
 CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,             
    film_id INT REFERENCES new_film(id), 
    language_id INT REFERENCES language(language_id), 
    title VARCHAR(255) NOT NULL,              
    score INT CHECK (score BETWEEN 1 AND 10), 
    review_text TEXT,                         
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO customer_review 
(film_id, language_id, title, score, review_text, last_update) 
VALUES
(1, 1, 'Great Movie!', 9, 'I really enjoyed the story and the acting was excellent.', NOW()),

(2, 2, 'Not bad', 6, 'The movie was okay but could have been shorter.', NOW())

delete from new_film where id=1
--mabrach ytms7 hit kayn ftable akhour( La clé (id)=(1) est toujours référencée à partir de la table « customer_review ».UPDATE ou DELETE sur la table « new_film » viole la contrainte de clé étrangère « customer_review_film_id_fkey » de la table « customer_review » )



-- Exercise 2 : DVD Rental


update film set language_id=2 where film_id=1
--store_id and address_id 
--  خاصك تحترم هاد الشروط:

-- store_id اللي غادي تدخل خاصو يكون كاين من قبل فـ store.

-- address_id اللي غادي تدخل خاصو يكون كاين من قبل فـ address.

-- إلا ما كاينينش → PostgreSQL غادي يعطيك Foreign key violation error.


drop table customer_review
--easy


select*from film f
inner join inventory i
   on  f.film_id=i.film_id
inner join rental r
   on r.inventory_id=i.inventory_id
where r.rental_date is null

SELECT f.film_id, f.title, f.rental_rate, r.rental_date, r.return_date
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
 select* from rental

select * from film f  
inner join film_actor FA 
   on FA.film_id=f.film_id
inner join actor A
 on FA.actor_id=A.actor_id and first_name||''||last_name='Penelope Monroe'
where title= 'sumo'

select * from film f
inner join film_category C
 on C.film_id=f.film_id 
inner join category CA
 on CA.category_id=C.category_id and name='Documentary'
where rating='R' and length<=60

SELECT f.title, f.description, r.rental_date, r.return_date, p.amount
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;