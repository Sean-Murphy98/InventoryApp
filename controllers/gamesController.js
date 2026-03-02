async function getGamesAll(req, res) {
  console.log("Games All");
  const games = [];
  res.render("games", { games: games });
}

function getGame(req, res) {
  console.log("One Game");
}

async function editGame(req, res) {
  console.log("Edit game");
}

async function deleteGame(req, res) {
  console.log("delete game");
}

module.exports = { getGamesAll, getGame, editGame, deleteGame };
