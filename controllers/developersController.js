async function getDevelopersAll(req, res) {
  console.log("Developers All");
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
