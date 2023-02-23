CREATE DATABASE befriends;

CREATE TABLE users(
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    );