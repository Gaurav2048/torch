import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://torchdepl.vercel.app/v1`, // Replace with your API base URL
  timeout: 1400,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
