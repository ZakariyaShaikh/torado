
import { MdOutlineHorizontalRule } from "react-icons/md";
import { Link } from "react-router-dom";

export const LinksHoverComponent = ({ hoveredLink }) => {

  const home = ["Home Demo 1", "Home Demo 2", "Home Demo 3"];
  const agents = ["Agents", "Agents Details"];
  const listing = [
    "Listings",
    "Listing Right Sidebar",
    "Listings Left Sidebar",
    "Listing Details",
  ];
  const pages = [
    "How it works",
    "Testimonials",
    "FAQ",
    "My Account",
    "Terms & Conditions",
    "Privacy Policy",
    "Error",
  ];
  const blog = ["Blog", "Blog Details"];
  let data;

  if (hoveredLink === "Home") {
    data = home;
  }
  if (hoveredLink === "Listing") {
    data = listing;
  }
  if (hoveredLink === "Agents") {
    data = agents;
  }
  if (hoveredLink === "Pages") {
    data = pages;
  }
  if (hoveredLink === "Blogs") {
    data = blog;
  }
  return (
    <div className="bg-white px-5 py-1 text-orange-600 flex flex-col gap-2 w-52">
      {data?.map((item, index) => (
        <Link key={index} className="group flex items-center">
          <MdOutlineHorizontalRule className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3" />
          <span className="transition-all duration-300 group-hover:translate-x-2">
            {item}
          </span>
        </Link>
      ))}
    </div>
  );
};
