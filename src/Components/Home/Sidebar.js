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

function Sidebar({ isOpen, setIsOpen }) {
  const menus = [
    { name: "Home", icon: <FaHome /> },
    { name: "Bookings", icon: <FaCalendarCheck /> },
    { name: "Tasks", icon: <FaCheckCircle /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "About Us", icon: <FaInfoCircle /> },
    { name: "Profile", icon: <FaUserCircle /> },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-56" : "w-16"
      } h-screen bg-[#40858a] text-white fixed top-0 left-0 transition-all duration-300 flex flex-col z-40`}
    >
      {/* Toggle button */}
      <div className="p-5 flex justify-between items-center mt-2 shadow-md">
        <FaBars
          className="cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Menu */}
      <div className="flex flex-col mt-4">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="flex items-center h-12 px-3 rounded-md cursor-pointer hover:bg-teal-500 transition-colors"
          >
            <span className="text-xl">{menu.icon}</span>
            <span
              className={`ml-4 text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
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
