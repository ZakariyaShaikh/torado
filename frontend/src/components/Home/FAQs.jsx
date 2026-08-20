import { useState } from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";

export const FAQs = () => {
  const [openId, setOpenId] = useState(null);
  const faqs = [
    {
      id: 1,
      title: "What is the price range of your properties?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium quisquam. Maiores laboriosam porro labore.",
    },
    {
      id: 2,
      title: "How will it take to process my Application?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium quisquam. Maiores laboriosam porro labore.",
    },
    {
      id: 3,
      title: "What if i need to move out before my lease experience?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium quisquam. Maiores laboriosam porro labore.",
    },
    {
      id: 4,
      title: "What our IT consultants suggests on new topics?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, laudantium quisquam. Maiores laboriosam porro labore.",
    },
  ];
  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-10 xl:px-20 py-14 lg:py-20 gap-10 lg:gap-15 bg-gray-100">
      <div className="relative grid grid-cols-2 min-h-[360px]">
        <div className="absolute top-5 left-4 sm:left-1/5 flex items-center gap-3 bg-white shadow-md w-52 sm:w-56 h-24 rounded-xl group">
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white -left-5 text-3xl transition-colors duration-500 group-hover:bg-orange-600">
            <FaHandHoldingDollar/>
          </span>
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold">3000+</span>
            <span className="text-sm text-gray-400">Happy Customer</span>
          </div>
        </div>
        <div className="left-image">
          <div className="grid grid-rows-[200px_1fr]">
            <span></span>
            <span className="bg-amber-400 w-fit overflow-hidden rounded-2xl">
              <img
                src="https://torado.envytheme.com/real-estate-2/default/assets/images/faq/faq-image-1.jpg"
                className="w-70 object-cover"
              />
            </span>
          </div>
        </div>
        <div className="right-image overflow-hidden rounded-2xl">
          <img
            src="https://torado.envytheme.com/real-estate-2/default/assets/images/faq/faq-image-2.jpg"
            alt="Logo-2"
            className="object-cover rounded-2xl h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 py-8 relative">
        <div className="header">
          <p className="text-3xl sm:text-4xl font-extrabold ">
            Need To Ask Some Questions Or Check Questions
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            return (
              <div className="flex flex-col gap-5" key={index}>
                <div
                  className="flex items-center gap-5 sm:gap-10 lg:gap-15 cursor-pointer"
                  onClick={() => handleToggle(faq.id)}
                >
                  <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold  shadow-lg transition-colors duration-500 hover:bg-green-400 ${openId === faq.id ? "bg-orange-400 text-white" : "bg-white"}`}>
                    {openId === faq.id ? "-" : "+"}
                  </span>

                  <span className="text-xl sm:text-2xl font-bold">{faq.title}</span>
                </div>

                <div
                  className={`grid transition-all duration-500 ${
                    openId === faq.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 pl-15 sm:pl-20 lg:pl-24">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="hidden lg:block absolute bottom-50 right-5 animate-[bounce_2s_linear_infinite]">
          <img src="http://torado.envytheme.com/real-estate-2/default/assets/images/shape/need-shape-1.png" alt="" />
        </span>
      </div>
    </div>
  );
};
