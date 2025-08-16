create database public;
use public;
create table Items(
id SERIAL primary key,
nom varchar(10),
price decimal(10,2)
);
create table Costumers(
id SERIAL primary key,
FirstName varchar(10),
LastName varchar(10)
);
/*qst1*/
insert into items (nom,price) values ("Small Desk",100),("Large desk",300),("Fan",80);
/*qst2*/
insert into Costumers (FirstName,LastName) values ("Greg","Jones"),("Sandra","Jones"),("Scott","Scott"),("Trevor","Green"),("Melanie","Johnson");
/*qst3*/

select * from items;
select * from items where price <80;
select * from items where price >=80;
select * from Costumers where LastName="Smith";/*maratrj3 walou hit maendnach fdata had smith*/
select * from Costumers where LastName="Jones";
select * from Costumers where LastName !="Scott";
