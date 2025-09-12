import React from "react";
import { FaPlane, FaHotel, FaBus, FaUsers } from "react-icons/fa";

function ApplicationForm() {
  return (
    <div className="bg-[#246e73] w-full p-4 flex flex-col justify-center items-center relative">
      {/* Top tabs overlapping */}
      <div className="relative z-20 -mb-6">
        <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-white text-gray-800 px-4 py-3 rounded-xl font-medium">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaPlane className="text-lg" />
            <h2>Flights</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaHotel className="text-lg" />
            <h2>Hotels</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaBus className="text-lg" />
            <h2>Bus</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaUsers className="text-lg" />
            <h2>Group</h2>
          </div>
        </div>
      </div>

      {/* Form container */}
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4 md:gap-0 py-6 md:py-10 bg-white rounded-lg px-4 md:px-10 w-full max-w-5xl relative z-10">

        <div className="flex-1 p-4 border border-gray-200 rounded-md">
          <p className="text-sm">FROM</p>
          <h2 className="text-xl md:text-2xl font-medium">DELHI</h2>
          <p className="text-sm">DEL, Delhi Indira Gandhi Intl</p>
        </div>

        <div className="flex-1 p-4 border border-gray-200 rounded-md">
          <p className="text-sm">TO</p>
          <h2 className="text-xl md:text-2xl font-medium">MUMBAI</h2>
          <p className="text-sm">BOM, Chhatrapati Shivaji</p>
        </div>

        <div className="flex-1 p-4 border border-gray-200 rounded-md">
          <p className="text-sm">Departure</p>
          <h2 className="text-xl md:text-2xl font-medium">13 Sep'25</h2>
          <p className="text-sm">Saturday</p>
        </div>

        <div className="flex-1 p-4 border border-gray-200 rounded-md">
          <p className="text-sm">Return</p>
          <h2 className="text-xl md:text-2xl font-medium">14 Sep'25</h2>
          <p className="text-sm">Sunday</p>
        </div>

        <div className="flex-1 p-4 border border-gray-200 rounded-md">
          <p className="text-sm">TRAVELLER & CLASS</p>
          <h2 className="text-base md:text-xl font-medium">1 Traveller</h2>
        </div>
      </div>
      <div className="relative z-20 -mt-6">
        <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-green-600 text-gray-800 px-4 py-3 rounded-xl font-medium">
          Search Flights
          </div>
        </div>
    </div>
  );
}

export default ApplicationForm;
