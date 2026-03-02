const pool = require("./pool");
async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getGenre(id) {
  const { rows } = await pool.query("SELECT * FROM genres WHERE id = $1", [id]);
  console.log(rows);
  return rows;
}

async function insertGenre(genre) {
  const ans = await pool.query(
    "INSERT INTO genres (title) VALUES ($1) ON CONFLICT (title) DO NOTHING",
    [genre.title],
  );
  return ans;
}

async function editGenre(id, genre) {
  await pool.query("UPDATE genres SET title = $1 WHERE id = $2", [
    genre.title,
    id,
  ]);
}

async function deleteGenre(id) {
  await pool.query("DELETE FROM genres WHERE id = $1", [id]);
}

module.exports = {
  getAllGenres,
  getGenre,
  insertGenre,
  deleteGenre,
  editGenre,
};
