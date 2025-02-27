import axios from "axios";
import { BASE_URL } from "../constants/app.constant";
import { accessTokenExist } from "../utils/helpers";

// Create the Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    try {
      const token = accessTokenExist()
      if (token && typeof token === "string" && token.trim() !== "") {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.warn("Could not access localStorage:", error.message);
      return config; 
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;