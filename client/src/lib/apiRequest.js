import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://xestate-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
