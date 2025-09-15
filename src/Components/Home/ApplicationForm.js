import React, { useState } from "react";
import { FaPlane, FaHotel, FaBus, FaUsers, FaExchangeAlt } from "react-icons/fa";

function ApplicationForm() {

  const [from, setFrom] = useState({
    city: "Delhi",
    code: "DEL, Delhi Indira Gandhi Intl",
  });
  const [to, setTo] = useState({
    city: "Mumbai",
    code: "BOM, Chhatrapati Shivaji",
  });


  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <div className="bg-[#246e73] w-full p-5 flex flex-col justify-center items-center relative">

      <div className="relative z-20 md:-mb-6 -mb-3">
        <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-white text-gray-800 px-4 py-4 rounded-xl font-medium">
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaPlane className="text-green-600" />
            <h2>Flights</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaHotel className="text-blue-600" />
            <h2>Hotels</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaBus className="text-yellow-600" />
            <h2>Bus</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:underline">
            <FaUsers className="text-purple-600" />
            <h2>Group</h2>
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-4 py-6 md:py-10 bg-white rounded-lg px-4 md:px-10 w-full max-w-5xl relative z-10">

        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <div className="flex gap-2 text-sm font-medium text-gray-700">
            <span className="cursor-pointer border border-red-900 py-1 px-2 rounded-full hover:bg-red-800 hover:text-white">
              One Way
            </span>
            <span className="cursor-pointer border border-red-900 py-1 px-2 rounded-full hover:bg-red-800 hover:text-white">
              Round Trip
            </span>
            <span className="cursor-pointer border border-red-900 py-1 px-2 rounded-full hover:bg-red-800 hover:text-white">
              Multi City
            </span>
          </div>
          <div>
            <p className="text-gray-600 font-medium text-sm md:text-base">
              Book Domestic and International Flight
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-nowrap gap-4 relative">

          <div className="flex-1 p-4 border border-gray-200 rounded-md md:rounded-l-md bg-white">
            <p className="text-sm">From</p>
            <h2 className="text-xl md:text-2xl font-bold">{from.city}</h2>
            <p className="text-sm">{from.code}</p>
          </div>


          <div className="flex-1 p-4 border border-gray-200 rounded-md md:rounded-r-md bg-white">
            <p className="text-sm">To</p>
            <h2 className="text-xl md:text-2xl font-bold">{to.city}</h2>
            <p className="text-sm">{to.code}</p>
          </div>


          <div className="absolute hidden md:top-1/2 md:block md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
            onClick={handleSwap}
          >
            <FaExchangeAlt className="text-gray-500 text-md" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 border border-gray-200 rounded-md">
            <p className="text-sm">Departure</p>
            <h2 className="text-xl md:text-2xl font-bold">13 Sep'25</h2>
            <p className="text-sm">Saturday</p>
          </div>

          <div className="flex-1 p-4 border border-gray-200 rounded-md">
            <p className="text-sm">Return</p>
            <h2 className="text-xl md:text-2xl font-bold">14 Sep'25</h2>
            <p className="text-sm">Sunday</p>
          </div>

          <div className="flex-1 p-4 border border-gray-200 rounded-md">
            <p className="text-sm">TRAVELLER & CLASS</p>
            <h2 className="text-base font-bold">1 Traveller & Economy</h2>
          </div>
        </div>
      </div>


      <div className="relative z-20 md:-mt-6 -mt-4">
        <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-green-600 text-white px-6 py-3 rounded-xl font-medium cursor-pointer">
          Search Flights
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
