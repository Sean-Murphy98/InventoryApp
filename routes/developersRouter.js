const { Router } = require("express");
const {
  getDevelopersAll,
  getDeveloper,
  editDeveloper,
  deleteDeveloper,
} = require("../controllers/developersController");

const developerRouter = Router();

developerRouter.get("/", getDevelopersAll);

developerRouter.get("/:id", getDeveloper);

developerRouter.post("/:id", editDeveloper);

developerRouter.delete("/:id", deleteDeveloper);

module.exports = developerRouter;
