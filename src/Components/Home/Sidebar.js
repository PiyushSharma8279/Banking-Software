import React from "react";
import {
  FaBars,
  FaCalendarCheck,
  FaCheckCircle,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate()
  const menus = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Pakage", icon: <FaCalendarCheck />, path: "/login" },
    { name: "Tasks", icon: <FaCheckCircle /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "About Us", icon: <FaInfoCircle />, path: "/about" },
    { name: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen bg-[#40858a] text-white transition-all duration-300 z-40 flex flex-col
        ${isOpen ? "w-56" : "w-0 sm:w-16"}
        overflow-hidden
      `}
    >
      
      <div className="p-5 flex justify-between items-center mt-2 shadow-md sm:flex">
        <FaBars
          className="cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

    
      <div className="flex flex-col mt-4">
        {menus.map((menu, index) => (
          <div
            key={index}
             onClick={() => navigate(menu.path)} 
            className="flex items-center gap-2 h-12 px-5 rounded-md cursor-pointer hover:bg-teal-500 transition-colors"
          >
            <span className="text-xl">{menu.icon}</span>
            <span
              className={`ml-4 text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0 sm:opacity-100"
              }`}
            >
              {menu.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
