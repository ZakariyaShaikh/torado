import axios from "axios";


const api = axios.create({
    baseURL :"http://localhost:3000"
});


export const adminLogin = async(data) => {
    const res = await api.post("/api/auth/admin/login" , data);
    return res.data;
}
export const adminLogOut = () => {
    localStorage.removeItem("token");
};

export const getAllProducts = async() => {
    const res = await api.get("api/products/");
    return res.data;
};
export const createProduct = async (data) => {
    const res = await api.post("/api/products/create", data);
    return res.data;
};
export const getProduct = async (id) => {
    const res = await api.get(`/api/products/${id}`);
    return res.data;
}
export const updateProduct = async (data,id) => {
     await api.put(`/api/products/${id}`, data);
}