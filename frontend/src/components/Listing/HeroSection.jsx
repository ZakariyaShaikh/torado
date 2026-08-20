import { useLocation } from "react-router-dom"


export const HeroSection = () => {
    const path = useLocation().pathname.split("/").at(-1);
    const blog_details = useLocation().pathname.split("/").includes("blog_details")
  return (
    <div className="flex flex-col items-center justify-center w-full bg-blue-950 text-white py-16 lg:py-20 mt-16 lg:mt-20">
        <span className="text-2xl capitalize font-bold">{blog_details ? "Blog Details" : path}</span>
        <span className="text-sm">Home / {blog_details ? "Blog Details" : path}</span>
    </div>
  )
}
