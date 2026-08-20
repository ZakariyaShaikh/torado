import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { LinksHoverComponent } from "./LinksHoverComponent";
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname.split("/").at(-1);
 
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Agents", path: "/agents" },
    { name: "About Us", path: "/about" },
    { name: "Listing", path: "/listing" },
    { name: "Pages", path: "/pages" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <div className=" fixed top-0 z-50 w-full">
      <div className="flex flex-col">
        {(path === "listing" || path === "agents"  || path === "blogs") && <div className="hidden lg:flex bg-black text-white items-center justify-between px-6 xl:px-20 py-2 ">
          <div className="flex items-center gap-5 text-sm xl:text-base">
            <span className="flex items-center gap-2">
              <span><MdPhoneInTalk/></span>
              <span>+000 123 456 789</span>
            </span>
            <span className="flex items-center gap-2">
              <span><IoMail/></span>
              <span>hello@torado.com</span>
            </span>
            <span className="flex items-center gap-2">
              <span><IoLocationSharp/></span>
              <span>3146 Koontz Lane, California</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <span><FaRegUser/></span>
              <span>Login / Register</span>
            </span>
            <span className="flex items-center gap-2">
              <span><TbWorld/></span>
              <span>English</span>
              <span><FaAngleDown/></span>
            </span>
          </div>
        </div>}
        <div className={`w-full px-4 sm:px-6 lg:px-10 xl:px-20 py-4 flex items-center justify-between ${path === "" ? "bg-blue-950 text-white" : "bg-white text-black"} `}>
        {/* Logo */}
        <Link to={"/"} className="logo w-32 sm:w-40">
          <img
            src={path === "" ? "https://torado.envytheme.com/real-estate-2/default/assets/images/logo.svg" : "https://torado.envytheme.com/real-estate-2/default/assets/images/white-logo.svg"}
            alt="Logo"
            className="object-cover"
          />
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {links.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink("")}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-semibold transition-colors duration-500 hover:text-orange-600 ${
                    isActive && "text-orange-500"
                  }`
                }
              >
                <span>{link.name}</span>
                {link.name === "About Us" || link.name === "Contact Us" ? "" : <IoIosArrowDown />}
              </NavLink>

              <div
                className={`absolute left-1/2 top-full mt-1 -translate-x-1/6 transition-transform duration-300 ${
                  hoveredLink === link.name ? "scale-x-100" : "scale-x-0"
                }`}
              >
                {link.name === "About Us" || link.name === "Contact Us" ? "" : <LinksHoverComponent hoveredLink={hoveredLink} />}
              </div>
            </div>
          ))}

          <button className="w-fit px-5 py-1 bg-green-600 text-xl cursor-pointer text-white rounded-lg transition-colors duration-500 hover:bg-orange-600">
            <span>Quick Contact</span>
          </button>

          {/* User button */}
          {(path === "/" || path === "") && <Link className="w-12 h-12 text-white flex items-center justify-center bg-gray-700 text-xl rounded-full border-2 border-white transition-colors duration-300 hover:bg-orange-600">
            <FaRegUser />
          </Link>} 
        </div>
        <button
          className={`lg:hidden text-3xl ${path === "" ? "text-white" : "text-black"}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      <div className={`lg:hidden ${isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"} transition-all duration-300`}>
        <div className={`overflow-hidden ${path === "" ? "bg-blue-950 text-white" : "bg-white text-black"} shadow-lg`}>
          <div className="flex flex-col gap-3 px-4 pb-5">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2 font-semibold transition-colors duration-300 hover:text-orange-600 ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button className="w-full px-5 py-2 bg-green-600 text-white rounded-lg transition-colors duration-500 hover:bg-orange-600">
              <span>Quick Contact</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
