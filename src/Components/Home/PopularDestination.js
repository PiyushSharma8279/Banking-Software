import React from "react";

function PopularDestination() {
  const destinations = [
    {
      title: "Stockholm, Sweden",
      img: "https://images.pexels.com/photos/2377441/pexels-photo-2377441.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Copenhagen, Denmark",
      img: "https://images.pexels.com/photos/3117216/pexels-photo-3117216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Oslo, Norway",
      img: "https://images.pexels.com/photos/134062/pexels-photo-134062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Tokyo, Japan",
      img: "https://images.pexels.com/photos/707677/pexels-photo-707677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-[#40858a] text-3xl font-medium mb-2">
        Destinations you can travel to now
      </h2>
      <h3 className="text-xl mb-6 text-gray-700">
        Popular destinations open to most visitors from India
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <img
              src={dest.img}
              alt={dest.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay with button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg mb-2">
                {dest.title}
              </h3>
              <button className="bg-[#40858a] hover:bg-[#306063] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularDestination;
