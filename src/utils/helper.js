import axios from "axios";
import Swal from "sweetalert2";


export const apiHelper = axios.create({
  baseURL: "https://super-simple-twitter.herokuapp.com/api",
});

export const Fire = Swal.mixin({
  position: "center",
  showConfirmButton: false,
  timer: 1500,
});