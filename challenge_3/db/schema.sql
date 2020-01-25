CREATE DATABASE checkout;

USE checkout;

CREATE TABLE guests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(40),
    password VARCHAR(40)
);

CREATE TABLE guest_address (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address1 VARCHAR(20),
    address2 VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20),
    zipcode INT(10),
    guest_id INT REFERENCES guest(id) 
);

CREATE TABLE guest_cardinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    creditCard INT(25),
    expiration INT(8),
    cvv INT(6),
    billingZip INT (10),
    guest_id INT REFERENCES gues(id)
);