CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    productName TEXT,
    imageUrl TEXT,
    Price NUMERIC
);

INSERT INTO products (name)
VALUES
('CAR', '', '200'),
('house', '', '300'),
('shoes', ' ', '50')

SELECT * FROM products;
