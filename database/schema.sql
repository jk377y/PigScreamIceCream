-- Drop all tables to reset the database
-- Create the table schemas
-- These are placeholder examples only

-- Drop existing tables
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;

-- Create tables
CREATE TABLE customers (
    customer_name TEXT,
    customer_email TEXT,
    customer_password TEXT
);

CREATE TABLE orders (
    order_id INTEGER
);

CREATE TABLE products (
    product_id INTEGER
);

CREATE TABLE order_items (
    order_item_id INTEGER
);