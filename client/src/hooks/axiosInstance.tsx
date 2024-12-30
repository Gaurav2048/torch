import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://torch-20gw8glvb-gaurav2048s-projects.vercel.app//v1", // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
