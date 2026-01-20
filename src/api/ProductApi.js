import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const getProducts = () => {
  return axios.get(API_URL);
};

export const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addProduct = (product) => {
  return axios.post(API_URL, product);
};

export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const updateProduct = (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};
