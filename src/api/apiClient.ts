import axios from "axios";

const BASE_URL = "https://api.thecatapi.com/v1";
const apiKey = import.meta.env.VITE_CAT_API_KEY;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": apiKey,
  },
});

export default apiClient;
