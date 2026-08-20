import { CiLogout } from "react-icons/ci";
import { adminLogOut } from "../../services/AdminServices";
import { Link, useNavigate } from "react-router-dom";

export const AdminNavbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        adminLogOut()
        navigate("/");
    };
  return (
    <div className="w-full bg-blue-950 px-4 sm:px-6 lg:px-10 xl:px-20 fixed top-0 left-0 py-4 lg:py-5 flex items-center justify-between z-50">
        <Link to={"/"} className="w-32 sm:w-fit">
            <img src="https://torado.envytheme.com/real-estate-2/default/assets/images/logo.svg" alt="Logo" />
        </Link>
        <div className="w-fit flex items-center justify-between gap-3 sm:gap-5">
            <button className="bg-orange-700 text-white font-semibold flex items-center gap-2 cursor-pointer px-3 sm:px-5 py-1 rounded-lg" onClick={handleClick}>
                <span><CiLogout/></span>
                <span className="hidden sm:inline">Log Out</span>
            </button>
            <div className="overflow-hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full">
                <img src="/male.png" alt="Logo" className="object-center object-cover" />
            </div>
            <div className="hidden sm:flex flex-col text-white">
                <span>Zakariya Shaikh</span>
                <span>Admin</span>
            </div>
        </div>
    </div>
  )
}
