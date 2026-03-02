const { Router } = require("express");
const {
  getGenresAll,
  getGenre,
  editGenre,
  deleteGenre,
  insertGenreForm,
  insertGenre,
} = require("../controllers/genresController");

const genresRouter = Router();

genresRouter.get("/", getGenresAll);

genresRouter.get("/new", insertGenreForm);

genresRouter.post("/new", insertGenre);

genresRouter.get("/:id", getGenre);

genresRouter.post("/:id", editGenre);

genresRouter.post("/delete/:id", deleteGenre);

module.exports = genresRouter;
