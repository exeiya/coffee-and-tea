const fs = require("fs").promises;
const path = require("path");
const dbPath = path.resolve(__dirname, "../db.json");

const getAllDrinkVaritiesFromDB = () => {
  const readData = fs.readFile(dbPath, "utf8").then(data => {
    return data ? JSON.parse(data).drinkVarieties : null;
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

module.exports = { getAllDrinkVaritiesFromDB, addNewDrinkVariety };