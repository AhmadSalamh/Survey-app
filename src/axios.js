import axios from "axios";
import store from "./store";

const axiosClient = axios.create({
  baseURL: " http://127.0.0.1:8000/api",
});

axiosClient.interceptors.request.use((config) => {
  console.log("request was sent");
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});
export default axiosClient;
