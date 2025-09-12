import React from "react";

function Offers() {
  const offers = [
    { title: "Stockholm, Sweden",
      img : "https://www.adivaha.com/demo/whitelabel12/images/secton03img02.png"
     },
    { title: "Copehagen, Denmark" ,
      img: "https://www.adivaha.com/demo/whitelabel12/images/secton03img01.png"
    },
    { title: "Oslo, Norway",
      img: "https://www.adivaha.com/demo/whitelabel12/images/secton03img03.png"
     },
    { title: "Tokyo, Japan",
      img : "https://www.adivaha.com/demo/whitelabel12/images/secton03img04.png"
     },
    { title: "Singapore, Singapore",
      img: "https://www.adivaha.com/demo/whitelabel12/images/secton03img05.png"
     },
    { title: "Bangkok, Thailand",
      img: "https://www.adivaha.com/demo/whitelabel12/images/secton03img06.png"
     },
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
                  `url(${offer.img})`,
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
