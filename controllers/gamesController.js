const db = require("../db/gameQueries");
async function getGamesAll(req, res) {
  try {
    console.log("Games All");
    const games = await db.getAllGames();
    res.render("games", { games: games, single: false });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function getGame(req, res) {
  console.log("One Game");
  const id = req.params.id;
  const game = await db.getGame(id);
  const developers = await db.getAllDevelopers();
  console.log(developers);
  const genres = await db.getAllGenres();
  console.log(genres);
  console.log(game);
  res.render("games", {
    games: game,
    single: true,
    developers: developers,
    genres: genres,
  });
}

async function editGame(req, res) {
  console.log("Edit game");
  await db.editGame(req.params.id, req.body);
  res.redirect("/games");
}

async function deleteGame(req, res) {
  await db.deleteGame(req.params.id);
  console.log("delete game");
  res.redirect("/games");
}

async function insertGameForm(req, res) {
  const developers = await db.getAllDevelopers();
  console.log(developers);
  const genres = await db.getAllGenres();
  res.render("newGame", {
    developers: developers,
    genres: genres,
  });
}

async function insertGame(req, res) {
  console.log("Insert game");
  try {
    const game = req.body;
    TEST = await db.insertGame(game);
    console.log(TEST);
    res.redirect("/games");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getGamesAll,
  getGame,
  editGame,
  deleteGame,
  insertGameForm,
  insertGame,
};
