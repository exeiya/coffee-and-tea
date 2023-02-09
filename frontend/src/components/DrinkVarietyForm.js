import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, FormControl, InputAdornment,
  RadioGroup, FormControlLabel, Radio, FormLabel,
  Select, MenuItem
} from "@mui/material";
import { useState } from "react";

const DrinkVarietyForm = ({ show, close, addNew }) => {
  const [name, setName] = useState("")
  const [weight, setWeight] = useState("")
  const [price, setPrice] = useState("")
  const [roastLevel, setRoastLevel] = useState(1)
  const [type, setType] = useState("coffee")

  const addVariety = async (event) => {
    event.preventDefault();
    const newVariety = { name, weight, price, roastLevel, type }
    addNew(newVariety)
    handleClose()
  }

  const handleClose = () => {
    setName("")
    setWeight("")
    setPrice("")
    setRoastLevel(1)
    setType("coffee")
    close()
  }

  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>Lisää uusi lajike</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form onSubmit={addVariety}>
          <FormControl sx={{ margin: "10px" }}>
            <Select
              sx={{ marginBottom: "10px" }}
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value={"coffee"}>Kahvi</MenuItem>
              <MenuItem value={"tea"}>Tee</MenuItem>
            </Select>
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Nimi" onChange={(e) => setName(e.target.value)} value={name} />
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Paino"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              type="number"
              inputProps={{
                min: "0"
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">g</InputAdornment>,
              }} />
            <TextField
              sx={{ marginBottom: "10px" }}
              label="Hinta"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              min="0"
              inputProps={{
                step: "0.01",
                min: "0"
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              }} />
            <FormLabel>Paahtoaste</FormLabel>
            <RadioGroup
              row
              sx={{ marginBottom: "10px" }}
              value={roastLevel}
              onChange={(e) => setRoastLevel(e.target.value)} >
              {[1, 2, 3, 4, 5].map(i => <FormControlLabel key={i} value={i} control={<Radio />} label={i} />)}
            </RadioGroup>
            <Button type="submit" variant="contained" disabled={!name}>Lisää</Button>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button variant="outlined" onClick={handleClose}>Peruuta</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DrinkVarietyForm