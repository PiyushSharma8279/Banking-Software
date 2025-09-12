import React from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";

function Details() {
  const offers = [
    {
      from: "DELHI ",
      to: "BARCELONA ",
      date: new Date().toLocaleDateString(),
      airline: "Emirates",
      duration: "11h 30m",
      
    },
    {
      from: "DELHI",
      to: "PARIS",
      date: new Date().toLocaleDateString(),
      airline: "Air France",
      duration: "9h 15m",
    },
    {
      from: "DELHI",
      to: "DUBAI",
      date: new Date().toLocaleDateString(),
      airline: "Emirates",
      duration: "3h 50m",
    },
    {
      from: "DELHI",
      to: "SYDNEY",
      date: new Date().toLocaleDateString(),
      airline: "Qantas",
      duration: "13h 10m",
    },
    {
      from: "DELHI",
      to: "LONDON",
      date: new Date().toLocaleDateString(),
      airline: "British Airways",
      duration: "10h 25m",
    },
    {
      from: "DELHI",
      to: "HONGKONG",
      date: new Date().toLocaleDateString(),
      airline: "Cathay Pacific",
      duration: "5h 25m",
    },
    {
      from: "DELHI",
      to: "NEW YORK",
      date: new Date().toLocaleDateString(),
      airline: "United Airlines",
      duration: "15h 40m",
    },
    {
      from: "DELHI",
      to: "LOS ANGELES",
      date: new Date().toLocaleDateString(),
      airline: "American Airlines",
      duration: "17h 20m",
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-[#246e73] text-3xl font-semibold mb-1">
        ✈️ Top Round-Trip Flight Deals
      </h2>
      <p className="text-gray-600 mb-6">
        Search • Compare • Book best round-trip flights from Delhi
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg border border-gray-100 bg-white hover:shadow-xl transition duration-300 p-4 flex flex-col justify-between"
          >
            {/* From & To */}
            <div>
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <FaPlaneDeparture className="text-green-600" />
                <span>{offer.from}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm mt-1">
                <FaPlaneArrival className="text-blue-600" />
                <span>{offer.to}</span>
              </div>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-500 mt-2">Date: {offer.date}</p>

            {/* Airline & Duration */}
            <div className="text-sm text-gray-600 mt-3">
              <p className="font-medium">{offer.airline}</p>
              <p>{offer.duration}</p>
            </div>

            {/* Price */}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
