import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { RiSendInsFill } from "react-icons/ri";
export const Footer = () => {
  const links = [
    "About Us",
    "Latest NEWS",
    "Contact Us",
    "Testimonials",
    "Meet Our Agents",
    "Privacy Policy",
  ];
  const blogs = [
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-14.jpg",
      date: "02 June 2025",
      description: "Redfin Unveils the Best Canadian Cities for Biking",
    },
    {
      img: "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-15.jpg",
      date: "03 June 2025",
      description: "Apartio Helps Get Your Dream & Luxury Space Alexa",
    },
  ];
  return (
    <div className="flex flex-col gap-10 bg-blue-950 pt-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[240px_200px_340px_1fr] gap-10 xl:gap-25 px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="flex flex-col gap-10">
          <Link to={"/"}>
            <img
              src="https://torado.envytheme.com/real-estate-2/default/assets/images/logo.svg"
              alt=""
            />
          </Link>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              cupiditate tenetur labore eveniet saepe fuga dict
            </p>
            <div className="flex items-center gap-5 group">
              <span className="text-orange-600 transition-all duration-500 group-hover:rotate-y-180 text-xl">
                <FaLocationDot />
              </span>
              <span className="transition-colors duration-300 hover:text-orange-600 cursor-pointer">
                2983 Edwards Street, North Carolina
              </span>
            </div>
            <div className="flex items-center gap-5 group">
              <span className="text-orange-600 transition-all duration-500 group-hover:rotate-y-180 text-xl">
                <IoIosCall />
              </span>
              <span className="transition-colors duration-300 hover:text-orange-600 cursor-pointer">
                (+68)1221 09876
              </span>
            </div>
            <div className="flex items-center gap-5 group">
              <span className="text-orange-600 transition-all duration-500 group-hover:rotate-y-180 text-xl">
                <IoMdMail />
              </span>
              <span className="transition-colors duration-300 hover:text-orange-600 cursor-pointer">
                hello@torado.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="header flex flex-col gap-3 w-fit">
            <span className="text-3xl font-bold">Quick Links</span>
            <div className="flex w-full ">
              <span className="bg-orange-600 w-1/2 h-0.5 rounded-l-2xl"></span>
              <span className="h-0.5 w-full bg-gray-400 rounded-r-2xl"></span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <div className="flex items-center gap-5" key={index}>
                <span>
                  <FaAngleRight />
                </span>
                <span>{link}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="header flex flex-col gap-3 w-fit">
            <span className="text-3xl font-bold">Latest Blogs</span>
            <div className="flex w-full ">
              <span className="bg-orange-600 w-1/2 h-0.5 rounded-l-2xl"></span>
              <span className="h-0.5 w-full bg-gray-400 rounded-r-2xl"></span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {blogs.map((blog , index) => (
              <div className="flex gap-5" key={index}>
                <span className="w-24 sm:w-30 shrink-0 overflow-hidden rounded-lg">
                  <img src={blog.img} alt="Blog_img" className="object-cover rounded-lg"/>
                </span>
                <ul className="flex flex-col gap-2">
                  <li>{blog.date}</li>
                  <li>{blog.description}</li>
                </ul>
              </div>
            ))}
          </div>
          
        </div>
        <div className="flex flex-col gap-10">
          <div className="header flex flex-col gap-3 w-fit">
            <span className="text-3xl font-bold">Subscribe Us</span>
            <div className="flex w-full ">
              <span className="bg-orange-600 w-1/2 h-0.5 rounded-l-2xl"></span>
              <span className="h-0.5 w-full bg-gray-400 rounded-r-2xl"></span>
            </div>
          </div>
          <span>Subscribe our newsletter to get our latest update & news.</span>
          <div className="flex items-center justify-between w-full bg-white py-2 px-2 rounded-lg">
            <input type="search" name="search" className="min-w-0 flex-1 px-3 outline-none text-black" placeholder="Enter email address" />
            <span className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl bg-orange-600 rounded-lg cursor-pointer"><RiSendInsFill/></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full border-t border-gray-600 py-5 px-4 sm:px-6 lg:px-10 xl:px-20 text-center lg:text-left">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-10">
          <span className="transition-colors duration-500 hover:text-orange-600 cursor-pointer">Terms & conditions</span>
          <span className="transition-colors duration-500 hover:text-orange-600 cursor-pointer">Privacy Policy</span>
          <span className="transition-colors duration-500 hover:text-orange-600 cursor-pointer">Help Center</span>
        </div>
        <span>
          Torado all right reserved design by: <span className="text-orange-600">EnvyTheme</span>
        </span>
      </div>
    </div>
  );
};
