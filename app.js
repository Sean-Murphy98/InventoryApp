const express = require("express");

require("dotenv").config();
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const developersRouter = require("./routes/developersRouter");
const gamesRouter = require("./routes/gamesRouter");
const genresRouter = require("./routes/genresRouter");

app.use("/games", gamesRouter);
app.use("/developers", developersRouter);
app.use("/genres", genresRouter);
app.get("/", (req, res) => {
  res.render("homePage");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Inventory App - listening on port ${PORT}`);
});
