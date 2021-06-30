import axios from "axios";

const API = "http://localhost:5000";

export const getLibros = async (user) => {
  return await axios.get(`${API}/libros`);
};


export const getLibro = async (id) => {
  return await axios.get(`${API}/libros/${id}`);
};