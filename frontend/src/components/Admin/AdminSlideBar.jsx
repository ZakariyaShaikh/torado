import { NavLink } from "react-router-dom"



export const AdminSlideBar = () => {
    const links = ["Dashboard" , "Properties" , "Agents"]
    
  return (
    <div className="bg-blue-950 text-white flex flex-col gap-y-5 lg:gap-y-10 w-full lg:w-[300px] lg:min-h-screen">
        <div className="hidden lg:flex header px-5 items-center justify-center">
            <span className="text-3xl bg-gradient-to-r from-white via-[#E9C46A] to-[#C8A45D] bg-clip-text text-transparent">Torado</span>
        </div>
        {/* Menu Section */}
        <div className="flex flex-col gap-2">
            <span className="hidden lg:block text-gray-400 text-sm ml-5">Menu</span>
            <div className="flex flex-row lg:flex-col overflow-x-auto bg-white/15">
                {links.map((link , index) => (
                    <NavLink to={`/auth/admin/${link}`} key={index} className={({ isActive }) =>
                  `transition-all duration-500 hover:bg-orange-500 cursor-pointer shrink-0 lg:w-full px-6 lg:px-10 py-4 lg:py-5 ${
                    isActive ? "bg-green-500" : "text-white"
                  }`
                }>
                        <span>{link}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    </div>
  )
}
