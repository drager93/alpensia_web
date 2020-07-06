import axios from "axios";

const port = 5000;
const host =
  process.env.NODE_ENV === "production"
    ? `52.79.77.247:${port}`
    : `localhost:${port}`;

const instance = axios.create({
  baseURL: `http://${host}/api/`,
  withCredentials: true,
  headers: {
    Pragma: "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default instance;
