import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarCheck,
  FaInfoCircle,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

function Header({ isOpen, setIsOpen }) {
  return (
    <header className="bg-white text-gray-800 p-4 shadow-md fixed top-0 right-0 left-0 z-30">
      <div className="flex justify-between items-center sm:pl-4 md:px-16">
       
        <div className="flex items-center gap-4 md:gap-8">
         
          <FaBars
            className="text-2xl cursor-pointer block md:hidden text-[#40858a]"
            onClick={() => setIsOpen(!isOpen)}
          />

          <h1 className="text-2xl font-bold text-[#246e73]">
            Safarnama Holidays
          </h1>

          
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <FaHome /> <p className="text-[13px]">Home</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaEnvelope /> <p className="text-[13px]">Contact Us</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaCheckCircle /> <p className="text-[13px]">Web Check-in</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaCalendarCheck /> <p className="text-[13px]">View Booking</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaInfoCircle /> <p className="text-[13px]">About Us</p>
            </div>
          </div>
        </div>

       
        <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-2 py-2 rounded-lg cursor-pointer">
          <FaUserCircle /> <p>Manage Account</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
