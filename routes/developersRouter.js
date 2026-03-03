const { Router } = require("express");
const {
  getDevelopersAll,
  getDeveloper,
  editDeveloper,
  deleteDeveloper,
  insertDeveloperForm,
  insertDeveloper,
} = require("../controllers/developersController");

const developerRouter = Router();

developerRouter.get("/", getDevelopersAll);

developerRouter.get("/new", insertDeveloperForm);

developerRouter.post("/new", insertDeveloper);

developerRouter.get("/:id", getDeveloper);

developerRouter.post("/:id", editDeveloper);

developerRouter.post("/delete/:id", deleteDeveloper);

module.exports = developerRouter;
