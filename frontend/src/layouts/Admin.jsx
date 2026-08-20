import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminNavbar } from "../components/Admin/AdminNavbar";
import { AdminSlideBar } from "../components/Admin/AdminSlideBar";
import { AdminDisplayArea } from "../components/Admin/AdminDisplayArea";


export const Admin = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

 useEffect(() => {
   if(!token) {
    navigate("/")
    toast.error("Unauthorized",{
      position : "top-center" ,
      autoClose : 2000,
      theme : "dark"
    })
    return;
  }
 },[token,navigate])
  return (
    <>
    <AdminNavbar/>
    <div className="flex flex-col lg:flex-row mt-20 lg:mt-22">
      <AdminSlideBar/>
      <AdminDisplayArea/>
    </div>
    </>
  )
}
