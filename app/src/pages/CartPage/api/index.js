import api from "../../../api/apiConfig";

export const cart = (body) => api.post("/order", body);
// export const cart = () => api.get("/order");
