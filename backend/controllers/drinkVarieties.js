const drinkVarietiesRouter = require("express").Router();
const DB = require("../utils/dbReader");

drinkVarietiesRouter.get("/", (request, response) => {
  DB.getAllDrinkVaritiesFromDB().then(data => {
    if (data) {
      response.json(data)
    } else {
      response.status(404).end()
    }
  });
});

module.exports = drinkVarietiesRouter;