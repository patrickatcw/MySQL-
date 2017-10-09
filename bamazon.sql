


DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE ice_creamDB;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NULL,
  department_name VARCHAR(20) NULL,
  price INT(5,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("hammer", "tools", 22, 100);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("puppy chow", "pets", 16, 200);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("shampoo", "health & beauty", 9, 50);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("nike shoes", "apparel", 60, 250);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("tent", "outdoor", 200, 120);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("football", "sports", 17, 120);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("backpack", "school supplies", 30, 100);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("lamp", "house ware", 35, 50);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("smart phone", "electronics", 200, 400);
INSERT INTO product_name (department_name, price, stock_quantity)
VALUES ("microwave", "kitchen", 80, 100);
