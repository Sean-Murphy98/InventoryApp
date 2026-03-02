const { Router } = require("express");
const {
  getGamesAll,
  getGame,
  editGame,
  deleteGame,
} = require("../controllers/gamesController");

const gamesRouter = Router();

gamesRouter.get("/", getGamesAll);

gamesRouter.get("/:id", getGame);

gamesRouter.post("/:id", editGame);

gamesRouter.delete("/:id", deleteGame);

module.exports = gamesRouter;
