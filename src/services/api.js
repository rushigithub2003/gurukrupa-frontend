// src/api.js — Axios instance and API helpers for the user website
import axios from 'axios';

//const api = axios.create({ baseURL: '/api' });
// const api = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const productsAPI = {
  getAll:  (params) => api.get('/products', { params }),
  getOne:  (id)     => api.get(`/products/${id}`),
};

export const categoriesAPI = {
  getAll: () => api.get('/categories'),
};

export default api;


