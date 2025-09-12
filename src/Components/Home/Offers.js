import React from "react";

function Offers() {
  const offers = [
    { title: "CIBIL report" },
    { title: "ITR download" },
    { title: "Banking download" },
    { title: "GST certificate download" },
    { title: "GST returns download" },
    { title: "Blurry documents finder" },
  ];

  return (
    <>
      <div className="p-4">
        <h2 className="text-[#40858a] text-3xl font-medium">
          Last Minutes Offers
        </h2>
        <h2 className="text-xl mb-6">
          Last Minute Offers From Selected Destination
        </h2>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className=" h-56 w-full rounded-lg overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.adivaha.com/demo/whitelabel12/images/secton03img01.png')",
              }}
            >
              {/* Text overlay */}
              <h2 className="  text-center text-white font-semibold text-lg bg-black/50 px-3 py-1 rounded">
                {offer.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Offers;
