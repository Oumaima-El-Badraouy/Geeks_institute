import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const pexelsApi = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization: process.env.PEXELS_API_KEY
  }
});
