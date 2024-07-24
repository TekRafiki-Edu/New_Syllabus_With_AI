// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', //  API base URL
  timeout: 1000, // Timeout in milliseconds
});

export default api;
