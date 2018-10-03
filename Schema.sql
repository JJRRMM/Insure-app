DROP DATABASE IF EXISTS insure_app_DB;
CREATE DATABASE insure_app_DB;

USE insure_app_DB;

CREATE TABLE profiles (
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  adrr_line1 VARCHAR(100) ,
  State VARCHAR(30), 
  city VARCHAR(100),
  zip VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE homeowners (
  id INT NOT NULL AUTO_INCREMENT,
  profile_id int, 
  policy_number VARCHAR(40) NOT NULL,
  policy_start date NOT NULL,
  policy_end date NOT NUll,
  premium decimal(8,2) default 0,
  deductable integer,
  policy_limit integer,
  PRIMARY KEY (id)
);

CREATE TABLE automobile (
  id INT NOT NULL AUTO_INCREMENT,
  profile_id int,
  vehicle_make VARCHAR(100) NOT NULL,
  vehicle_model VARCHAR(100) NOT NULL,
  vehicle_year INT NOT NULL,
  vehicle_id_Number VARCHAR(30) not null,
  PRIMARY KEY (id)
);

insert into profiles (firstname,lastname,adrr_line1,state,city,zip)
   values('Jim', 'Maloney','5 April Drive','New Jersey','Dayton','08810');
insert into profiles (firstname,lastname,adrr_line1,state,city,zip)
   values('John', 'Smith','12 Debra Drive','New Jersey','Dayton','08810'); 
insert into profiles (firstname,lastname,adrr_line1,state,city,zip)
   values('Bill', 'Turner','33 Kay Ann Drive','New Jersey','Dayton','08810');   
insert into profiles (firstname)
   values('Tommy'); 