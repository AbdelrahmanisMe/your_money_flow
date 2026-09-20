import api from "./axios.api";

export const getAccounts = () => api.get("/accounts");

export default {};
