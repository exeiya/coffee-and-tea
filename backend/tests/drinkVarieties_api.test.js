const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

test("All varieties are returned", async () => {
  const response = await api
    .get("/api/drinkVarieties")
    .expect(200)
    .expect("Content-Type", /application\/json/)

  expect(response.body).toHaveLength(3)
});

test("Attempting to create a variety without name fails with correct status", async () => {
  const newVariety = {
    type: "coffee",
    roastLevel: "1",
    weight: "500",
    price: "7.5"
  }

  const response = await api
    .post("/api/drinkVarieties")
    .send(newVariety)
    .expect(400)
    .expect("Content-Type", /application\/json/)

  expect(response.body.error).toContain("Name cannot be empty");
})

test("Attempting to create a variety without name does not change db", async () => {
  const newVariety = {
    type: "coffee",
    roastLevel: "1",
    weight: "500",
    price: "7.5"
  }

  await api
    .post("/api/drinkVarieties")
    .send(newVariety)
    .expect(400)
    .expect("Content-Type", /application\/json/)

  const response = await api
    .get("/api/drinkVarieties")
    .expect(200)
    .expect("Content-Type", /application\/json/)

  expect(response.body).toHaveLength(3)
})

test("A new variety can be added", async () => {
  const newVariety = {
    name: "Testi Kahvi",
    type: "coffee",
    roastLevel: "1",
    weight: "500",
    price: "7.5"
  }

  const response = await api
    .post("/api/drinkVarieties")
    .send(newVariety)
    .expect(201)
    .expect("Content-Type", /application\/json/)

  expect(response.body.name).toContain("Testi Kahvi");

  const dbRequestResponse = await api
    .get("/api/drinkVarieties")
    .expect(200)
    .expect("Content-Type", /application\/json/)

  expect(dbRequestResponse.body).toHaveLength(4)
})