import React from "react";
import { useNavigate } from "react-router-dom";

function ViewMorePan() {
    const navigate = useNavigate()
    const packages = [
        {
            title: "FORTUNE",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/fortune.jpg",
        },
        {
            title: "ITC HOTELS",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/ITC-HOTEL.jpg",
        },
        {
            title: "JW MARRIOTT MUSSOORIE",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/jw-marriott-mussoorie.jpg",
        },
        {
            title: "RADISSON CHAIN HOTELS",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/Radisson-hotel.jpg",
        },
        {
            title: "STERLING HOTELS AND RESORTS",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/Sterling-2.jpg",
        },
        {
            title: "TAJ THEOG SHIMLA",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/TAJ-HOTEL.jpg",
        },
        {
            title: "REGENTA",
            img: "https://t2tworld.com/wp-content/uploads/2023/06/regenta-1.jpg",
        },
        {
            title: "CLUB MAHINDRA HOTELS AND RESORTS",
            img: "https://t2tworld.com/wp-content/uploads/2023/07/image-1-2.png",
        },
    ];

     const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="px-4 sm:px-6  py-10 bg-gray-50">
             
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold  text-[#246e73] mb-10">
                Pan India Hotels
            </h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 group"
                    >
                       
                        <div className="overflow-hidden">
                            <img
                                src={pkg.img}
                                alt={pkg.title}
                                className="h-48 w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                         
                        <h3 className="text-center text-lg font-semibold text-gray-800 py-3 border-t">
                            {pkg.title}
                        </h3>

                        
                        <div className="p-4 flex flex-col justify-between">
                            <button className="mt-4 w-full border border-[#246e73]  bg-[#246e73] text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-[#246e73] transition"
                                onClick={() => navigate(`/hotels/${createSlug(pkg.title)}`)}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewMorePan;
