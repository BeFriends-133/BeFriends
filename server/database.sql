CREATE DATABASE befriends;

CREATE TABLE users(
    u_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
    );