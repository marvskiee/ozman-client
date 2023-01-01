import axios from "axios";

export const axiosInstance = axios.create({
  //  baseURL: "https://aiointernet.herokuapp.com/",
  baseURL: "https://ozman.onrender.com/",
});

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
