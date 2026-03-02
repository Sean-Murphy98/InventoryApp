const db = require("../db/genreQueries");
async function getGenresAll(req, res) {
  try {
    console.log("Genres All");
    const genres = await db.getAllGenres();
    res.render("genre", { genres: genres, single: false });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function getGenre(req, res) {
  console.log("One Genre");
  const id = req.params.id;
  const genre = await db.getGenre(id);
  res.render("genre", { genres: genre, single: true });
}

async function editGenre(req, res) {
  await db.editGenre(req.params.id, req.body);
  console.log("Edit genre");
  res.redirect("/genres");
}

async function deleteGenre(req, res) {
  await db.deleteGenre(req.params.id);
  console.log("delete genre");
  res.redirect("/genres");
}

function insertGenreForm(req, res) {
  res.render("newGenre");
}

async function insertGenre(req, res) {
  console.log("Insert genre");
  try {
    const genre = req.body;
    TEST = await db.insertGenre(genre);
    console.log(TEST);
    if (TEST.rowCount === 0) {
      return res.status(400).send("Genre already exists");
    }
    res.redirect("/genres");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getGenresAll,
  getGenre,
  editGenre,
  deleteGenre,
  insertGenreForm,
  insertGenre,
};
