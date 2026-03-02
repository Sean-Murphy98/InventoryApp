const pool = require("./pool");

async function getAllDevelopers() {
  const { rows } = await pool.query(
    "SELECT dev.id, dev.name, ARRAY_AGG(g.title) AS games FROM developers dev LEFT JOIN games g ON dev.id = g.developer GROUP BY dev.id ORDER BY dev.name",
  );
  console.log(rows);
  return rows;
}

async function getDeveloper(id) {
  const { rows } = await pool.query("SELECT * FROM developers WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function insertDeveloper(developer) {
  const ans = await pool.query(
    "INSERT INTO developers (name, games) VALUES ($1, $2) ON CONFLICT (name) DO NOTHING",
    [developer.name, developer.games],
  );
  return ans;
}

async function deleteDeveloper(id) {
  await pool.query("DELETE FROM developers WHERE id = $1", [id]);
}

async function editDeveloper(id, developer) {
  await pool.query(
    "UPDATE developers SET name = $1, games = $2 WHERE id = $3",
    [developer.name, developer.games, id],
  );
}

module.exports = {
  getAllDevelopers,
  getDeveloper,
  insertDeveloper,
  deleteDeveloper,
  editDeveloper,
};
