import api from "./axios.api";

export const getIncome = () => api.get("/income");
export const createIncome = (incomeData) => api.post("/income", incomeData);
export const updateIncome = (id, incomeData) => api.put(`/income/${id}`, incomeData);
export const deleteIncome = (id) => api.delete(`/income/${id}`);
