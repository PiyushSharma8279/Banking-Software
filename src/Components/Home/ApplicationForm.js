import React, { useState } from "react";
import { FaPlane, FaHotel, FaBus, FaUsers, FaExchangeAlt } from "react-icons/fa";

function ApplicationForm() {
  const [activeTab, setActiveTab] = useState("flights");

  const [from, setFrom] = useState({
    city: "Delhi",
    code: "DEL, Delhi Indira Gandhi Intl",
  });
  const [to, setTo] = useState({
    city: "Mumbai",
    code: "BOM, Chhatrapati Shivaji",
  });


  const today = new Date();
  const twoDaysLater = new Date();
  twoDaysLater.setDate(today.getDate() + 2);


  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const [departureDate, setDepartureDate] = useState(formatDate(today));
  const [returnDate, setReturnDate] = useState(formatDate(twoDaysLater));


  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div className="bg-[#246e73] w-full p-5 flex flex-col justify-center items-center relative">

        <div className="relative z-20 md:-mb-6 -mb-3">
          <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-white text-gray-800 px-4 py-4 rounded-xl font-medium">
            <div
              onClick={() => setActiveTab("flights")}
              className={`flex items-center gap-2 cursor-pointer hover:underline ${activeTab === "flights" ? "text-green-600 font-bold" : ""
                }`}
            >
              <FaPlane className="text-green-600" />
              <h2>Flights</h2>
            </div>
            <div
              onClick={() => setActiveTab("hotels")}
              className={`flex items-center gap-2 cursor-pointer hover:underline ${activeTab === "hotels" ? "text-blue-600 font-bold" : ""
                }`}
            >
              <FaHotel className="text-blue-600" />
              <h2>Hotels</h2>
            </div>
            <div
              onClick={() => setActiveTab("bus")}
              className={`flex items-center gap-2 cursor-pointer hover:underline ${activeTab === "bus" ? "text-yellow-600 font-bold" : ""
                }`}
            >
              <FaBus className="text-yellow-600" />
              <h2>Bus</h2>
            </div>
            <div
              onClick={() => setActiveTab("group")}
              className={`flex items-center gap-2 cursor-pointer hover:underline ${activeTab === "group" ? "text-purple-600 font-bold" : ""
                }`}
            >
              <FaUsers className="text-purple-600" />
              <h2>Group</h2>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-4 py-6 md:py-10 bg-white rounded-lg px-4 md:px-10 w-full max-w-5xl relative z-10">
          {activeTab === "flights" && (
            <>
              
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
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  Book Domestic and International Flight
                </p>
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

                <div
                  className="absolute hidden md:top-1/2 md:block md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
                  onClick={handleSwap}
                >
                  <FaExchangeAlt className="text-gray-500 text-md" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 p-4 border border-gray-200 rounded-md">
                  <p className="text-sm">Departure</p>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full text-xl md:text-2xl font-semibold outline-none"
                  />
                </div>

                <div className="flex-1 p-4 border border-gray-200 rounded-md">
                  <p className="text-sm">Return</p>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full text-xl md:text-2xl font-semibold outline-none"
                  />
                </div>
                <div className="flex-1 p-4 border border-gray-200 rounded-md">
                  <p className="text-sm">TRAVELLER & CLASS</p>
                  <h2 className="text-base font-bold">1 Traveller & Economy</h2>
                </div>
              </div>
            </>
          )}

          {activeTab === "hotels" && (
            <div className="flex flex-wrap gap-4">
              <div className="p-4 border border-gray-200 rounded-md">
                <p className="text-sm">City / Location</p>
                <h2 className="text-xl md:text-2xl font-bold">Mumbai</h2>
                <p className="text-sm">Choose your hotel location</p>
              </div>
              <div className="flex-1 p-4 border border-gray-200 rounded-md">
                <p className="text-sm">Check-in</p>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full text-xl md:text-2xl font-semibold outline-none"
                />
              </div>

              <div className="flex-1 p-4 border border-gray-200 rounded-md">
                <p className="text-sm">Check-Out</p>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full text-xl md:text-2xl font-semibold outline-none"
                />
              </div>
              <div className="p-4 border border-gray-200 rounded-md">
                <p className="text-sm">Guests</p>
                <h2 className="text-base font-bold">2 Adults, 1 Room</h2>
              </div>
            </div>
          )}

          {activeTab === "bus" && (
            <div className="flex gap-4">
              <div className="flex-1 p-4 border border-gray-200 rounded-md">
                <p className="text-sm">From</p>
                <h2 className="text-xl md:text-2xl font-bold">Delhi</h2>
              </div>

              <div className="flex-1 p-4 border border-gray-200 rounded-md">
                <p className="text-sm">To</p>
                <h2 className="text-xl md:text-2xl font-bold">Jaipur</h2>
              </div>

              <div className="flex-1 p-4 border border-gray-200 rounded-md">
                <p className="text-sm">Date</p>
                <h2 className="text-xl md:text-2xl font-bold">16 Sep'25</h2>
              </div>
            </div>
          )}

          {activeTab === "group" && (
            <div className="flex gap-4">
              <div className="p-4 border flex-1 border-gray-200 rounded-md">
                <p className="text-sm">Destination</p>
                <h2 className="text-xl md:text-2xl font-bold">Kerala</h2>
                <p className="text-sm">Plan your group trip</p>
              </div>
              <div className="p-4 border flex-1 border-gray-200 rounded-md">
                <p className="text-sm">Group Size</p>
                <h2 className="text-xl md:text-2xl font-bold">15 People</h2>
              </div>
            </div>
          )}
        </div>

       
        <div className="relative z-20 md:-mt-6 -mt-4">
          <div className="flex flex-wrap gap-3 md:gap-5 shadow-lg bg-green-600 text-white px-6 py-3 rounded-xl font-medium cursor-pointer">
            {activeTab === "flights" && "Search Flights"}
            {activeTab === "hotels" && "Search Hotels"}
            {activeTab === "bus" && "Search Bus"}
            {activeTab === "group" && "Search Group Trips"}
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationForm;
