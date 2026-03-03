#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ) UNIQUE,
  developer INTEGER REFERENCES developers(id) ON DELETE CASCADE,
  genre VARCHAR ( 255 ) REFERENCES genres(title) ON DELETE SET NULL
);

TRUNCATE TABLE games RESTART IDENTITY;

INSERT INTO games (title, developer, genre) 
VALUES
  ('Half-Life 2', 1, 'Action'),
  ('World of Warcraft', 2, 'Action');
`;

async function main() {
  console.log("seeding games...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
