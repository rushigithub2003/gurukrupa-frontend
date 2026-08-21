// src/api.js — Axios instance and API helpers for the user website
// import axios from 'axios';

//const api = axios.create({ baseURL: '/api' }); //not used

// const api = axios.create({
//   baseURL: "http://localhost:5000/api"  // this for local, if we want to deploy it, then replace with backend URL/ api
// });


//This is for after depoly means configure after deployment
// src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

// ============================================================
// PRODUCTS
// ============================================================

export const productsAPI = {
  getAll: (params) =>
    api.get("/products", { params }),

  getOne: (id) =>
    api.get(`/products/${id}`),
};

// ============================================================
// CATEGORIES
// ============================================================

export const categoriesAPI = {
  getAll: () =>
    api.get("/categories"),
};

// ============================================================
// MAINTENANCE
// ============================================================

export const maintenanceAPI = {
  get: () =>
    api.get("/maintenance"),

  validatePreview: (token) =>
    api.post("/maintenance/preview/validate", {
      token,
    }),
};

export default api;