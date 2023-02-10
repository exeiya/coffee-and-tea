const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

test("Respond to requests to unknown endpoints with status 404", async () => {
  await api
    .get("/api/")
    .expect(404);

  await api
    .get("/api/unknown")
    .expect(404);
});