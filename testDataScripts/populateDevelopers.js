#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS developers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ) UNIQUE
);

TRUNCATE TABLE games RESTART IDENTITY;

INSERT INTO developers (name) 
VALUES
  ('Valve'),
  ('Blizzard');
`;

async function main() {
  console.log("seeding developers...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
