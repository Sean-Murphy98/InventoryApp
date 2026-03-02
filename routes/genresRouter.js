const { Router } = require("express");
const {
  getGenresAll,
  getGenre,
  editGenre,
  deleteGenre,
} = require("../controllers/genresController");

const genresRouter = Router();

genresRouter.get("/", getGenresAll);

genresRouter.get("/:id", getGenre);

genresRouter.post("/:id", editGenre);

genresRouter.delete("/:id", deleteGenre);

module.exports = genresRouter;
