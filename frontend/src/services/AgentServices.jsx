import axios from "axios";


const api = axios.create({
    baseURL : "http://localhost:3000"
});


export const createAgent = async (data) => {
    const res = await api.post("/api/agents/create" , data);
    return res.data;
}
export const getAllAgent = async () => {
    const res = await api.get("/api/agents/");
    return res.data;
};
export const updateAgent = async (id,data) => {
    const res = await api.put(`/api/agents/update/${id}` , data);
    return res.data;
};
export const deleteAgent = async (id) => {
    await api.delete(`/api/agents/${id}`)
}