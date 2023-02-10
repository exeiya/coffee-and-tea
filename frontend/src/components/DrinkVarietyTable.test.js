import { render, screen } from "@testing-library/react";
import DrinkVarietyTable from "./DrinkVarietyTable";

test("Renders content", () => {
  const drinks = [
    {
      id: 1,
      name: "Juhla Mokka",
      type: "coffee",
      roastLevel: "1",
      weight: "500",
      price: "7"
    },
    {
      id: 2,
      name: "Juhla Mokka Tumma Paahto",
      type: "coffee",
      roastLevel: "1",
      weight: "500",
      price: "7.5"
    },
  ]

  render(<DrinkVarietyTable drinks={drinks} title={"Kahvit"} />)

  let element = screen.getByText("Juhla Mokka")
  expect(element).toBeDefined()

  element = screen.getByText("Juhla Mokka Tumma Paahto")
  expect(element).toBeDefined()
})

test("Renders title", () => {
  const drinks = [
    {
      id: 1,
      name: "Juhla Mokka",
      type: "coffee",
      roastLevel: "1",
      weight: "500",
      price: "7"
    }
  ]

  render(<DrinkVarietyTable drinks={drinks} title={"Kahvit"} />)

  const element = screen.getByText("Kahvit")
  expect(element).toBeDefined()
})
