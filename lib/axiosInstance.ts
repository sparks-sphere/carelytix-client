import axios from "axios";

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;