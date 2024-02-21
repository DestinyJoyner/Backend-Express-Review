DROP DATABASE IF EXISTS videogame_dev;

CREATE DATABASE videogame_dev;

\c videogame_dev;

CREATE TABLE videogames (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year INT,
    favorite BOOLEAN,
    game_system TEXT
);
