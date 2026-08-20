import { BlogsArea } from "../components/Blogs/BlogsArea"
import {HeroSection} from "../components/Listing/HeroSection"

export const Blogs = () => {
  return (
    <div className="flex flex-col">
        <HeroSection/>
        <BlogsArea/>
    </div>
  )
}
