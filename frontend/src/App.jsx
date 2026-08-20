import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./pages/Home"
import { Agents } from "./pages/Agents"
import { Admin } from "./layouts/Admin"
import { AdminLogin } from "./components/Admin/AdminLogin"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext"
import { UpdatePropertyForm } from "./components/Admin/Properties/UpdatePropertyForm"
import { UpdateAgentForm } from "./components/Admin/Agents/AgentUpdateForm"
import { Listing } from "./pages/Listing"
import { ScrollReveal } from "./components/ScrollReveal"
import { Blogs } from "./pages/Blogs"




function App() {
 

  return (
    <>
  
   <BrowserRouter>
   <AdminContext>
    <ScrollReveal/>
    <Routes>
      <Route  element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/blog_details/:id" element={<Blogs/>}/>
      </Route>
      <Route path="/auth/admin" element={<Admin/>}/>
      <Route path="/auth/admin/Properties" element={<Admin/>}/>
      <Route path="/auth/admin/Agents" element={<Admin/>}/>
      <Route path="/auth/admin/Dashboard" element={<Admin/>}/>
      <Route path="/auth/admin/login" element={<AdminLogin/>}/>
      <Route path="/products/:id" element={<UpdatePropertyForm/>}/>
      <Route path="/agents/:id" element={<UpdateAgentForm/>}/>
    </Routes>
     <ToastContainer/>
     </AdminContext>
    </BrowserRouter>
    </>
  )
}

export default App
