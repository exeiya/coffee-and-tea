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

drinkVarietiesRouter.post("/", (request, response) => {
  const variety = request.body
  const newDrinkVariety = {
    name: variety.name,
    type: variety.type || "coffee",
    roastLevel: variety.roastLevel,
    weight: variety.weight,
    price: variety.price
  }

  if (!variety.name) {
    return response.status(400).json({ error: "Name cannot be empty" })
  }

  DB.addNewDrinkVariety(newDrinkVariety).then(data => {
    response.status(201).json(data)
  }).catch((error) => {
    console.log(error)
    response.status(500).json({ error: "Something went wrong" })
  });
});

module.exports = drinkVarietiesRouter;