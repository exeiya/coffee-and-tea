const express = require("express")
const app = express()

const allDrinks = [
  { id: 1,
    name: "coffee 1", 
    type: "coffee",
    roastLevel: "1",
    weight: "500",
    price: "7" },
  { id: 2,
    name: "coffee 2", 
    type: "coffee",
    roastLevel: "2",
    weight: "450",
    price: "8" },
  { id: 3,
    name: "tea 1", 
    type: "tea",
    roastLevel: "-",
    weight: "40",
    price: "3" }
]

app.get("/api/drinkVarieties", (request, response) => {
  response.json(allDrinks)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" })
}

app.use(unknownEndpoint)

module.exports = app