import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_APP_ENV === "development"
      ? import.meta.env.VITE_API_URL
      : "/api",
  withCredentials: true,
});

export default api;
