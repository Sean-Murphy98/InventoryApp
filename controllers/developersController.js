const db = require("../db/developerQueries");
async function getDevelopersAll(req, res) {
  console.log("Developers All");
  const developers = [];
  res.render("developers", { developers: developers });
}

function getDeveloper(req, res) {
  console.log("One Developer");
}

async function editDeveloper(req, res) {
  console.log("Edit developer");
}

async function deleteDeveloper(req, res) {
  console.log("delete developer");
}

module.exports = {
  getDevelopersAll,
  getDeveloper,
  editDeveloper,
  deleteDeveloper,
};
