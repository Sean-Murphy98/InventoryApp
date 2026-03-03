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
  await db.deleteDeveloper(req.params.id);
  console.log("delete developer");
  res.redirect("/developers");
}

function insertDeveloperForm(req, res) {
  res.render("newDeveloper");
}

async function insertDeveloper(req, res) {
  console.log("Insert developer");
  try {
    const name = req.body.name;
    console.log("name", name);
    TEST = await db.insertDeveloper(name);
    console.log(TEST);
    if (TEST.rowCount === 0) {
      return res.status(400).send("Developer already exists");
    }
    res.redirect("/developers");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getDevelopersAll,
  getDeveloper,
  editDeveloper,
  deleteDeveloper,
  insertDeveloperForm,
  insertDeveloper,
};
