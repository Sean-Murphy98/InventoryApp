const { Router } = require("express");
const {
  getGamesAll,
  getGame,
  editGame,
  deleteGame,
  insertGameForm,
  insertGame,
} = require("../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", getGamesAll);

gamesRouter.get("/new", insertGameForm);

gamesRouter.post("/new", insertGame);

gamesRouter.get("/:id", getGame);

gamesRouter.post("/:id", editGame);

gamesRouter.post("/delete/:id", deleteGame);

module.exports = gamesRouter;
