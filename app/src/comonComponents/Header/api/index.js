import api from "../../../api/apiConfig";

export const signIn = (body) => api.post("auth/signIn", body);
export const signUp = (body) => api.post("/auth/signup", body);
