### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


-- CREATE DATABASE slydqdpto2xmbk2u;
-- USE slydqdpto2xmbk2u;

-- CREATE TABLE burgers
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	burger_name varchar(255) NOT NULL,
-- 	devoured BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
