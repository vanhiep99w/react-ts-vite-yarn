import axios from "axios";

export const headlessConfig = axios.create({
  baseURL: "http://localhost:8080/o/",
  headers: {
    Authorization: `Basic ${window.btoa("test@liferay.com:1")}`
  }
});
