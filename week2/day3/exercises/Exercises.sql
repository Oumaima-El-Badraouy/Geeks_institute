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