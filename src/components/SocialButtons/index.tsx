import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaButtons = () => {
  const buttons = [
    {
      icon: <FaInstagram className="text-2xl" />,
      name: "Instagram",
      bgClass: "group-hover:bg-[#E1306C]", // Instagram
      tooltipClass: "bg-[#E1306C]"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      bgClass: "group-hover:bg-[#333]", // GitHub
      tooltipClass: "bg-[#333]"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      bgClass: "group-hover:bg-[#0A66C2]", // LinkedIn atualizado
      tooltipClass: "bg-[#0A66C2]"
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="flex">
        {buttons.map((button, index) => (
          <div key={index} className="mx-5 text-center cursor-pointer flex flex-col items-center relative z-10 transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
            <div className="group relative flex flex-col items-center no-underline">
              <div className="relative z-10">
                <span className={`dark:bg-black h-14 w-14 flex items-center justify-center rounded-full shadow-md transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] bg-white border-2 border-black dark:border-white ${button.bgClass} group-hover:border-transparent`}>
                  <span className="text-black dark:text-white group-hover:text-white transition-colors duration-400">
                    {button.icon}
                  </span>
                </span>
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full ${button.tooltipClass} text-white px-4 py-2 rounded-3xl shadow-md opacity-0 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:-top-7 text-lg`}>
                  {button.name}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 ${button.tooltipClass} rotate-45`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaButtons;