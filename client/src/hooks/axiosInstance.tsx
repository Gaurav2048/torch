import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://torchapp-gold.vercel.app/v1", // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
