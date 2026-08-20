import { Blogs } from "../../assets/Blogs.json";
import { FaUserAlt } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BlogDetails } from "./BlogDetails";

export const BlogsArea = () => {
  const categories = [
    "Real Estate",
    "Apartment",
    "Real Homes",
    "Business",
    "Property",
  ];
  const tags = [
    "Houses",
    "Rooms",
    "Garages",
    "Flat",
    "Modern",
    "Luxury",
    "Property",
  ];
  const { id } = useParams();
  return (
    <div className="grid grid-cols-[900px_auto] gap-x-5 px-20 py-10 gap-y-10">
      {id ? (
        <>
        <BlogDetails id={id}/>
        </>
      ) : (
        <div className="flex flex-col gap-15 min-h-screen">
          {Blogs?.map((blog, index) => (
            <div
              className="flex flex-col gap-5 shadow-2xl pb-5 rounded-md overflow-hidden"
              key={index}
            >
              <div className="img overflow-hidden w-full relative">
                <img
                  src={blog?.image}
                  alt="Blog Image"
                  className="object-cover object-center w-full h-full"
                />
                <span className="w-14 text-white rounded-md h-12 px-3 flex items-center justify-center absolute bottom-5 left-5 bg-green-600">
                  {blog.date}
                </span>
              </div>
              <div className="flex flex-col gap-5 px-4">
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-2">
                    <FaUserAlt className="text-orange-600" />
                    <span className="text-gray-500">By Admin</span>
                  </span>
                  <span> / </span>
                  <span className="flex items-center gap-2">
                    <FaRegComment className="text-orange-600" />
                    <span className="text-gray-500">No Comment</span>
                  </span>
                </div>
                <span className="text-2xl font-bold">{blog.title}</span>
                <p className="text-gray-400">{blog.description}</p>
                <Link to={`/blogs/blog_details/${blog.id}`} className="text-orange-600">Read More</Link>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-5">
            <span>
              <FaAngleLeft />
            </span>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                className={`px-5 py-3 rounded-full ${index === 0 ? "bg-orange-600 text-white" : "shadow-lg"}`}
              >
                {index + 1}
              </span>
            ))}
            <span>
              <FaAngleRight />
            </span>
          </div>
        </div>
      )}
      <div className="flex-col flex gap-10">
        <div className="flex items-center px-5 py-8 shadow-lg rounded-lg w-full">
          <div className="bg-gray-300 w-full flex items-center rounded-md overflow-hidden text-black">
            <input
              type="search"
              name="search"
              className="px-5 py-2 outline-none w-full"
              placeholder="Search..."
            />
            <span className="bg-orange-400 w-10 h-10 flex items-center justify-center text-white">
              <FaSearch />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 px-5 py-3 shadow-lg rounded-lg w-full">
          <span className="text-2xl font-bold">Popular Post</span>
          {Blogs.slice(0, 3).map((blog, index) => {
            return (
              <div className="flex gap-5" key={index}>
                <span className="overflow-hidden w-50 rounded-lg">
                  <img
                    src={blog.image}
                    alt="Blog Image"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
                <div className="flex flex-col gap-3">
                  <span className="text-gray-400">{blog.date} 2026</span>
                  <p className="text-lg font-bold line-clamp-2">{blog.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 px-5 py-3 shadow-lg rounded-lg w-full">
          <span className="text-2xl font-bold">Categories</span>
          <ol className="list-disc px-5 marker:text-orange-600 marker:text-2xl">
            {categories.map((category, index) => (
              <li key={index} className="">
                {category}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-5 px-5 py-3 shadow-lg rounded-lg w-full">
          <span className="text-2xl font-bold">Popular Tags</span>
          <div className="flex items-center gap-5 flex-wrap">
            {tags.map((tag, index) => (
              <span
                className="w-20 h-10 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-green-600 hover:text-white text-sm"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
