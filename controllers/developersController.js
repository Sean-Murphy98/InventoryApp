const db = require("../db/developerQueries");

async function getDevelopersAll(req, res) {
  console.log("Developers All");
  const developers = await db.getAllDevelopers();
  res.render("developers", { developers: developers, single: false });
}

async function getDeveloper(req, res) {
  console.log("One Developer");
  const developers = await db.getDeveloper(req.params.id);
  res.render("developers", { developers: developers, single: true });
}

async function editDeveloper(req, res) {
  await db.editDeveloper(req.params.id, req.body);
  console.log("req.body", req.body);
  res.redirect("/developers");
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
