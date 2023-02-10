import { Table, TableHead, TableRow, TableBody, 
  TableCell, TableContainer, Paper, Typography }  from '@mui/material';
import styled from "@emotion/styled";

const StyledTableCell = styled(TableCell)`
  background-color: #00acc1;
  color: white;
  font-size: 14px;
  font-weight: 600;
`

const TitleTableCell = styled(TableCell)`
  background-color: #364a62;
  color: white;
  border-bottom: none;
  padding: 10px;
`

const DrinkVarietyTable = ({title, drinks}) => {
  return (
    <div>
    <TableContainer component={Paper} sx={{ minWidth: "420px", maxWidth: "550px" }}>
     <Table>
        <TableHead>
          <TableRow>
            <TitleTableCell
              colSpan={4} 
              align="center">
                <Typography variant="h6">{title}</Typography>
            </TitleTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Nimi</StyledTableCell>
            <StyledTableCell align="right">Paahtoaste</StyledTableCell>
            <StyledTableCell align="right">Paino (g)</StyledTableCell>
            <StyledTableCell align="right">Hinta (€)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drinks.map((drink) => (
            <TableRow key={drink.id}>
              <TableCell sx={{ fontWeight: "bold" }}>{drink.name}</TableCell>
              <TableCell align="right">{drink.roastLevel}</TableCell>
              <TableCell align="right">{drink.weight}</TableCell>
              <TableCell align="right">{drink.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>  
      </TableContainer>
    </div>
  )
}

export default DrinkVarietyTable;