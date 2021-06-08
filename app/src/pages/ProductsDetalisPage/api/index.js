import api from "../../../api/apiConfig";

export const productsDetalis = (id) => api.get(`/products/${id}`);
