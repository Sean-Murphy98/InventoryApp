async function getGenresAll(req, res) {
  console.log("Genres All");
}

function getGenre(req, res) {
  console.log("One Genre");
}

async function editGenre(req, res) {
  console.log("Edit genre");
}

async function deleteGenre(req, res) {
  console.log("delete genre");
}

module.exports = { getGenresAll, getGenre, editGenre, deleteGenre };
