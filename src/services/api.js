import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Crear una instancia de Axios
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Tiempo de espera de 5 segundos
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la solicitud:', error);
    return Promise.reject(
      error.response?.data?.message || 'Error inesperado en la API'
    );
  }
);

// Función para login
export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data; // { token }
  } catch (error) {
    throw new Error(error);
  }
};

// Función para obtener productos
export const getProductos = async () => {
  try {
    const response = await api.get('/productos');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Función para crear un producto
export const createProducto = async (data) => {
  try {
    const response = await api.post('/productos', data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Función para obtener alertas
export const getAlertas = async () => {
  try {
    const response = await api.get('/alertas');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};