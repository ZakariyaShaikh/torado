import { FaRegComment, FaUserAlt } from "react-icons/fa";
import Blogs from "../../assets/Blogs.json";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

export const BlogDetails = ({ id }) => {
  const [blog, setBlog] = useState();

  const comments = [
    {
      name : "Olivic Dsuza",
      image : "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-3.jpg",
      time : "07:10 pm",
      date : "June 20, 2025",
      description : "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat dolore magna ipsum."
    },
    {
      name : "Josef Harris",
      image : "https://torado.envytheme.com/real-estate-2/default/assets/images/user/user-image-2.jpg",
      time : "07:10 pm",
      date : "June 22, 2025",
      description : "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat dolore magna ipsum."
    },
  ]

  useEffect(() => {
    const getBlog = Blogs.Blogs.find((item) => item.id === Number(id));
    setBlog(getBlog);
  }, [id]);
  return (
    <>
      <div className="flex flex-col gap-15 pb-5 rounded-md overflow-hidden">
        <div className="img overflow-hidden w-full relative">
          <img
            src={blog?.image}
            alt="Blog Image"
            className="object-cover object-center w-full h-full"
          />
          <span className="w-14 text-white rounded-md h-12 px-3 flex items-center justify-center absolute bottom-5 left-5 bg-green-600">
            {blog?.date}
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
          <span className="text-2xl font-bold">{blog?.title}</span>
          <p className="text-gray-400">{blog?.description}</p>
          <p className="text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium sed
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam.
          </p>
          <div className="flex items-center gap-5 px-5 shadow-xl py-5">
            <span className="text-5xl font-bold text-orange-600">99</span>
            <p className="font-semibold">
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              voluptas doloremque, quos incidunt modi tempore maiores quia
              explicabo autem? Ipsa?"
            </p>
          </div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua Ut enim ad
            minim veniam, quis nostrud exercitation ullamc laboris nisi ut
            aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo.
          </p>
          <p className="text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspici unde
            omnis iste natus error sit voluptatem accusantium sed doloremque
            laudantium.
          </p>
          <div className="flex items-center justify-between px-5 py-4 shadow-xl rounded-lg">
            <div className="flex items-center gap-3">
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaBookmark />
              </span>
              <span className="text-gray-400">House, Apartments, Villa</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">Share :</span>
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaTwitter />
              </span>
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaPinterestP />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-full px-5 py-5 shadow-2xl rounded-lg">
          <span className="w-60 rounded-full overflow-hidden">
            <img
              src={blog?.Agent_Image}
              alt={blog?.Agent_Name}
              className="w-full object-cover object-center rounded-full"
            />
          </span>
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold">{blog?.Agent_Name}</span>
            <p className="text-gray-400">{blog?.Agent_Description}</p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaTwitter />
              </span>
              <span className="px-3 py-3 rounded-full border border-gray-400 text-orange-600 transition-colors duration-300 hover:text-white hover:bg-orange-600 cursor-pointer">
                <FaPinterestP />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-3xl font-bold">2 Comments</span>
          {comments.map((comment , index) => {
            return (
              <div className="flex gap-5 px-5 py-10 shadow-lg w-full" key={index}>
                <span className="w-30 rounded-full">
                  <img src={comment.image} alt={comment.name} className="object-cover object-center rounded-full"/>
                </span>
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold">{comment.name}</span>
                    <div className="flex w-full items-center justify-between">
                      <span>{comment.date} | {comment.time}</span>
                      <span className="text-xl text-orange-600 cursor-pointer">Reply</span>
                    </div>
                    <p className="text-gray-400">{comment.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col gap-5 w-full shadow-2xl px-5 py-10">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">Leave a replay</span>
            <p className="text-gray-400">Your email address will not be published. Required fields are marked</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <input type="text" className="w-full px-5 py-3 bg-gray-300 rounded-md outline-none" placeholder="Name"/>
              <input type="email" name="email" className="px-5 py-3 bg-gray-300 w-full rounded-md outline-none" placeholder="Email" />
            </div>
            <textarea name="comment" cols="30" className="px-5 py-3 bg-gray-300 w-full rounded-md outline-none" placeholder="Comment"></textarea>
            <button className="px-5 py-3 rounded-md cursor-pointer w-fit bg-orange-600 text-white transition-colors duration-500 hover:bg-green-600">Post Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};
