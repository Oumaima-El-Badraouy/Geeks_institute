CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES product_orders(order_id) ON DELETE CASCADE,
    item_name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);
CREATE OR REPLACE FUNCTION get_order_total(p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(price) INTO total
    FROM items
    WHERE order_id = p_order_id;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;
SELECT get_order_total(1);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
ALTER TABLE product_orders
ADD COLUMN user_id INT REFERENCES users(user_id) ON DELETE CASCADE;

CREATE OR REPLACE FUNCTION get_user_order_total(p_user_id INT, p_order_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
BEGIN
    SELECT SUM(i.price) INTO total
    FROM items i
    JOIN product_orders o ON i.order_id = o.order_id
    WHERE o.order_id = p_order_id
      AND o.user_id = p_user_id;

    RETURN COALESCE(total, 0);
END;
$$ LANGUAGE plpgsql;
SELECT get_user_order_total(1, 3);
