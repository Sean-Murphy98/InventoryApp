const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getGame(id) {
  const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
  return rows;
}

async function insertGame(game) {
  await pool.query(
    "INSERT INTO games (title, developer, genre) VALUES ($1, $2, $3)",
    [game.title, game.developer, game.genre],
  );
}

async function deleteGame(id) {
  await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

module.exports = {
  getAllGames,
  getGame,
  insertGame,
  deleteGame,
};
