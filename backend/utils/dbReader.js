const fs = require("fs").promises;
const path = require("path");

// set to use test mock db for test
let dbPath = path.resolve(__dirname, "../db.json");
if (process.env.NODE_ENV === "test") {
  dbPath = path.resolve(__dirname, "../tests/testdb.json");
}

const getAllDrinkVaritiesFromDB = () => {
  const readData = fs.readFile(dbPath, "utf8").then(data => {
    return data ? JSON.parse(data).drinkVarieties : null;
  })
  return readData;
}

const getOneDrinkVariety = (id) => {
  const readData = fs.readFile(dbPath, "utf8").then(data => {
    const varieties = JSON.parse(data).drinkVarieties;
    const variety = varieties.find(v => v.id == id)
    return variety
  })
  return readData;
}

// mock db generated ids
const idNumberGenerator = () => {
  return Math.floor(Math.random() * 100000);
}

const addNewDrinkVariety = (drink) => {
  const newDrink = { ...drink, id: idNumberGenerator() }
  const drinkVarieties = fs.readFile(dbPath, "utf8")
    .then(readData => JSON.parse(readData))
    .then(data => {
      data.drinkVarieties.push(newDrink)
      const newData = JSON.stringify(data)
      fs.writeFile(dbPath, newData, "utf-8", (err) => {
        if (err) console.log(err)
      })

      return newDrink;
    });
  return drinkVarieties
}

module.exports = { getAllDrinkVaritiesFromDB, addNewDrinkVariety, getOneDrinkVariety };