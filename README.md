# Coffees and Teas

## Frontend

- Run frontend by first installing packages first with `npm install` and then run with `npm start` in the `frontend` directory
  - By default runs in port 3000
- Run test with `npm test` in the `frontend` directory

## Backend

- Run backend by first installing packages first with `npm install` and then run with `npm start` in the `backend` directory
  - By default runs in port 3001, API endpoint can by found in `/api/drinkVarieties` (e.g. `localhost:3001/api/drinkVarieties`)
- To test backend run `npm test` in the `backend` directory
  - Due to currently missing features, test database is not initialized for separate test runs and subsequent test runs are bound to
    fail (because the last test in `drinkVarieties_api.tests.js` creates a new entry)
