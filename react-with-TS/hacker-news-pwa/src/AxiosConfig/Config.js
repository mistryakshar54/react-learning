import axios from "axios";

const instance = axios.create({
  baseURL: "https://node-hnapi.herokuapp.com/",
  timeout: 10000
});

export default instance;