const pool = require("./pool");

async function getAllDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers");
  return rows;
}

async function getDeveloper(id) {
  const { rows } = await pool.query("SELECT * FROM developers WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function insertDeveloper(developer) {
  await pool.query("INSERT INTO developers (title, games) VALUES ($1, $2)", [
    developer.title,
    developer.games,
  ]);
}

async function deleteDeveloper(id) {
  await pool.query("DELETE FROM developers WHERE id = $1", [id]);
}

module.exports = {
  getAllDevelopers,
  getDeveloper,
  insertDeveloper,
  deleteDeveloper,
};
