import React from 'react'

function Details() {
     const offers = [
    { title: " Easy and effective dashboard" },
    { title: " Easy and effective dashboard" },
   { title: " Easy and effective dashboard" },
    { title: " Easy and effective dashboard" },
   { title: " Easy and effective dashboard" },
   { title: " Easy and effective dashboard" },
  ];
    return (
        <>
        <div className="p-4">
        <h2 className="text-[#40858a] text-3xl font-medium">
          Top round-trip flight deals
        </h2>
        <h2 className="text-xl mb-6">
          Search - Compare - Book Top Round-Trip Flight Deals from:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className=" h-56 w-full rounded-lg overflow-hidden shadow-md bg-cover bg-center"
              
            >
              {/* Text overlay */}
              <h2 className=" text-center text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
                {offer.title}
              </h2>
            </div>
          ))}
        </div>
        </div>
        </>
    )
}

export default Details
