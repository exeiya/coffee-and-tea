const fs = require("fs").promises;
const path = require("path");
const dbPath = path.resolve(__dirname, "../db.json");

const getAllDrinkVaritiesFromDB = () => {
  const readData = fs.readFile(dbPath, "utf8").then(data => {
    return data ? JSON.parse(data).drinkVarieties : null;
  })
  return readData;
}

module.exports = { getAllDrinkVaritiesFromDB };