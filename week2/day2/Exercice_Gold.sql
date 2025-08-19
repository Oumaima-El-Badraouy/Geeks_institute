-- Exercise 1: DVD Rental
select  * from film where rating='G' OR rating='PG';
select rating,count(*) from film Group by rating;
select  * from film where rating='G' OR rating='PG-13';
select  * from film where rating='G' OR rating='PG-13' and rental_duration< 3 and rental_rate< 3.00 order by title asc;
update customer set first_name='Oumaima' where customer_id=1;
update address set address='Casa' 
From customer 
where  customer_id=1;

--Exercise 2


-- Exercise 2: students table
-- create table students(
-- id SERIAL primary key,
-- first_name varchar(10),
-- last_name varchar(10),
-- birth_date date
-- );

 create table students(
 id SERIAL primary key,
 first_name varchar(10),
 last_name varchar(10),
 birth_date date
 );
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Scott', '1987-07-27'),
('Amelia', 'Green', '1996-04-07'),
('David', 'Johnson', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');

INSERT INTO students (first_name, last_name, birth_date) VALUES
('Oumaima', 'ElBadraouy', '2005-12-08');

update students 
set birth_date='1998-11-02'
where first_name ||''||last_name in ('Lea Benichou','Marc Benichou' )
 update students 
 set last_name ='Guez' where first_name ='David';
 delete from students where first_name='Lea' and  last_name='Benichou';
 select count(*) from students ;
  select count(*) from students where birth_date >'2000-01-01';
  alter table students add column math_grade integer
update students set math_grade=80 where id=1
update students set math_grade=90 where id=2 or id=4
update students set math_grade=40 where id=6
 select count(*) from students where math_grade>83 ;
 INSERT INTO students (first_name, last_name, birth_date,math_grade) VALUES ('Omer', 'Simpson', '1980-10-03',70)
SELECT 
       COUNT(math_grade) AS total_grade
FROM students
GROUP BY first_name||''||last_name;

select sum(math_grade) from students group by first_name||''||last_name

--Exercise 3 : Items and customers

CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    quantity_purchases INT,
    customer_id INT REFERENCES customers(id),
    item_id INT REFERENCES items(id)
);

insert into purchases (quantity_purchases,customer_id,item_id) values 
(1,3,3),
(10,5,2),(2,1,1);
 select * from purchases;
  select * from purchases inner join customers on  customers.id=purchases.customer_id
    select * from purchases inner join customers on  purchases.customer_id=5
 select * from purchases inner join items on   items.id=purchases.item_id and nom='Large Desk' or nom='Small Desk'
   select I.nom,C.FirstName,C.LastName from purchases P 
   inner join customers C on  C.id=P.customer_id
   inner join items I on   I.id=P.item_id
insert into purchases (quantity_purchases,customer_id) values (1,3); --yup we can hit madeclaritouch f attributes dyal linsertion sinon lazdnaha atkoun required raykhsna daroury inseriwha 
   
