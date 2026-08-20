import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react"
import { getAllProducts } from "../services/AdminServices";
import { getAllAgent } from "../services/AgentServices";

const AdminData = createContext();
export const AdminContext = ({children}) => {
    const [allProducts , setAllProducts] = useState([]);
    const [allAgents , setAllAgents] = useState([])
    const [error , setError ] = useState();
    const [loading , setLoading] = useState(false)

        const getProducts = async () => {
        try {
            const res = await getAllProducts();
            setAllProducts(res?.products || []);
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching data");
        } finally {
            setLoading(false);
        }
    };
    const getAgents = async () => {
        try {
            const res = await getAllAgent();
            setAllAgents(res?.agents || []);
        } catch (error) {
            setError(error.response?.data?.message || "Error fetching data");
        } finally {
            setLoading(false);
        }
    };

useEffect(() => {
    getProducts();
    getAgents();
}, []);
    console.log(allProducts);
    console.log(allAgents);
  return (
    <AdminData.Provider value={{allProducts , setAllProducts , error , setError, loading , setLoading, allAgents , setAllAgents , getAgents}}>{children}</AdminData.Provider>
  )
}

export const useAdmin = () => useContext(AdminData)