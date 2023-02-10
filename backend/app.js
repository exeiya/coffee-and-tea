const express = require("express");
const app = express();
const cors = require("cors");
const drinkVarietiesRouter = require("./controllers/drinkVarieties");

app.use(cors());
app.use(express.json());

app.use("/api/drinkVarieties", drinkVarietiesRouter);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

module.exports = app