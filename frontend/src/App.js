import { useState, useEffect } from "react";
import DrinkVarietyTable from "./components/DrinkVarietyTable";
import { Container, Typography , Button, Paper} from "@mui/material";
import DrinkVarietyForm from "./components/DrinkVarietyForm";
import styled from "@emotion/styled";

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

const TitlePaper = styled(Paper)`
  background-color: #364a62;
  color: white;
  max-width: 850px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

const TableContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`

function App() {
  const [drinks, setDrinks] = useState([])
  const [showFormDialog, setShowFormDialog] = useState(false)

  useEffect(() => {
    setDrinks(allDrinks)
  }, [])

  const addNewVariety = (variety) => {
    setDrinks([...drinks, variety])
  }

  const coffees = drinks.filter(d => d.type === "coffee")
  const teas = drinks.filter(d => d.type === "tea")

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <TitlePaper>
          <Typography variant="h4" align="center">Kahvit ja Teet</Typography>
          <Button 
            variant="contained" 
            sx={{ width: "150px", marginTop: "10px"}}
            onClick={() => setShowFormDialog(true)}
          >
            Lisää uusi
          </Button>
        </TitlePaper>
      </div>
      <DrinkVarietyForm show={showFormDialog} close={() => setShowFormDialog(false)} addNew={addNewVariety} />
      <TableContainer>
        <DrinkVarietyTable drinks={coffees} title="Kahvit" />
        <DrinkVarietyTable drinks={teas} title="Teet" />
      </TableContainer>
    </div>
  );
}

export default App;
