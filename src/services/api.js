// src/api.js — Axios instance and API helpers for the user website
import axios from 'axios';

//const api = axios.create({ baseURL: '/api' }); //not used

const api = axios.create({
  baseURL: "https://gurukrupa-backend-zat5.onrender.com/api"  // this for local
});


//This is for after depoly means configure after deployment
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL
// });

export const productsAPI = {
  getAll:  (params) => api.get('/products', { params }),
  getOne:  (id)     => api.get(`/products/${id}`),
};

export const categoriesAPI = {
  getAll: () => api.get('/categories'),
};

export default api;


