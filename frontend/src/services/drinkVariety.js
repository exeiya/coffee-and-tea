import axios from "axios";

const url = "http://localhost:3001/api/drinkVarieties";

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
}

const create = async (drinkVariety) => {
  const response = await axios.post(url, drinkVariety);
  return response.data;
}

const drinkVarietyService = { getAll, create }

export default drinkVarietyService;