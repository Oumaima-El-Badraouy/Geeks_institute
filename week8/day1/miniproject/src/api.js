import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city) => {
  const res = await axios.get(BASE_URL, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return res.data;
};
