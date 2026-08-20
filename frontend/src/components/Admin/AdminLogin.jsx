import { useState } from "react"
import { adminLogin } from "../../services/AdminServices";
import { useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



export const AdminLogin = () => {
    const [formValues , setFormValues] = useState({
        email :"",
        password : ""
    });
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const [isVisible , setIsVisible]= useState(false)

    const handleChange = (e) => {
        const {name , value} = e.target;
        setFormValues((prev) => {
            return {
                ...prev , [name] : value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
          const res =  await adminLogin(formValues);
          console.log(res)
          localStorage.setItem("token" , res.token);
          navigate("/auth/admin")
        } catch (error) {
            setError(error.response?.data?.message|| "Something went wrong")
        }
    }
    const handleClick = (e) => {
        e.preventDefault();

        setIsVisible((prev) => !prev)
    }
  return (
    <div className="w-full h-screen flex items-center justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-15 shadow-2xl px-5 py-5 w-[400px] rounded-lg">
            <div className="header flex flex-col items-center justify-center">
                {error && <span className="text-red-500 text-md">{error}</span>}
                <h1 className="text-5xl font-bold">Admin Login</h1>
            </div>

            {/* Form */}
            <form action="" className="flex flex-col gap-3">
                {/* Email */}
                <label htmlFor="email" className="flex gap-3 items-center">
                    <span>Email:</span>
                    <input type="email" name="email" value={formValues.email} placeholder="e.g johndoe@gmail.com" className="w-full px-3 border border-gray-400 outline-none rounded-lg" required onChange={handleChange}/>
                </label>
                {/* Password */}
                <label htmlFor="password" className="flex gap-3 items-center">
                    <span>Password:</span>
                    <input type={isVisible ? "text" : "password"} name="password" value={formValues.password} placeholder="please enter password" className="w-full px-3 border border-gray-400 outline-none rounded-lg" required onChange={handleChange}/>
                    {isVisible ? <button className="cursor-pointer" onClick={handleClick}><FaEye/></button> : <button className="cursor-pointer" onClick={handleClick}><FaEyeSlash/></button>}
                </label>
                <button type="submit" className="px-5 py-1 bg-orange-500 transition-colors duration-500 hover:bg-green-400 cursor-pointer w-fit rounded-md">Login</button>
            </form>
            {/* Form-ends-here */}
        </div>
    </div>
  )
}

