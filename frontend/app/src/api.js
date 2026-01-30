import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getProducts = () => API.get("/products");
export const addProduct = (product) => API.post("/products", product);
