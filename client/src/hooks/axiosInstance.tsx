import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/v1", // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
