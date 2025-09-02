import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-1-a0bx.onrender.com/api", // ✅ point to Render backend
});

export default api;
