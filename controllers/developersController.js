const db = require("../db/developerQueries");

async function getDevelopersAll(req, res) {
  console.log("Developers All");
  const developers = await db.getAllDevelopers();
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

function insertDeveloperForm(req, res) {
  res.render("newDeveloper");
}

async function insertDeveloper(req, res) {
  console.log("Insert developer");
}

module.exports = {
  getDevelopersAll,
  getDeveloper,
  editDeveloper,
  deleteDeveloper,
  insertDeveloperForm,
  insertDeveloper,
};
