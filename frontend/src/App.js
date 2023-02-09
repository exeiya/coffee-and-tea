import { useState, useEffect } from "react";

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

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    setDrinks(allDrinks)
  }, [])

  const coffees = drinks.filter(d => d.type === "coffee")
  const teas = drinks.filter(d => d.type === "tea")

  return (
    <div>
      <h2>Coffees and Teas</h2>
      <table>
        <tr>
          <th>Coffees</th>
        </tr>
        {coffees.map(c => <tr><td>{c.name}</td></tr>)}
      </table>
      <table>
        <tr>
          <th>Teas</th>
        </tr>
        {teas.map(t => <tr><td>{t.name}</td></tr>)}
      </table>
    </div>
  );
}

export default App;
