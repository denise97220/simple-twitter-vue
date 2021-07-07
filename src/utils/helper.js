import axios from "axios";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://super-simple-twitter.herokuapp.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export const apiHelper = axiosInstance;

export const Fire = Swal.mixin({
  position: "center",
  showConfirmButton: false,
  timer: 1500,
});