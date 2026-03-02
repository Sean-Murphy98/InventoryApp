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
  const ans = await pool.query(
    "INSERT INTO games (title, developer, genre) VALUES ($1, $2, $3) ON CONFLICT (title) DO NOTHING",
    [game.title, game.developer, game.genre],
  );
  return ans;
}

async function deleteGame(id) {
  await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

async function editGame(id, game) {
  await pool.query(
    "UPDATE games SET title = $1, developer = $2, genre = $3 WHERE id = $4",
    [game.title, game.developer, game.genre, id],
  );
}

async function getGamesByDeveloper(developerId) {
  const { rows } = await pool.query(
    "SELECT * FROM games WHERE developer = $1",
    [developerId],
  );
  return rows;
}

module.exports = {
  getAllGames,
  getGame,
  insertGame,
  deleteGame,
  editGame,
  getGamesByDeveloper,
};
