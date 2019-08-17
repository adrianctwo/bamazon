CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER NOT NULL auto_increment,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER,
    PRIMARY KEY (item_id)
);