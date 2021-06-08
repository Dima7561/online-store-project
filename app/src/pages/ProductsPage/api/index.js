import api from "../../../api/apiConfig";

export const products = (page) => api.get(`/products?page=${page}`);
