import React from "react";

function Offers() {
  const offers = [
    { title: "Stockholm, Sweden",
      img : "https://t3.ftcdn.net/jpg/01/41/11/62/360_F_141116210_SnQQ1bsw4EbOhIXF9wb5tkMeQlN2wUmE.jpg"
     },
    { title: "Copehagen, Denmark" ,
      img: "https://www.shutterstock.com/image-photo/copenhagen-iconic-view-famous-old-600nw-1476195866.jpg"
    },
    { title: "Oslo, Norway",
      img: "https://media.istockphoto.com/id/1500420309/photo/perfect-reflection-of-the-reine-village-on-the-water-of-the-fjord-in-the-lofoten-islands.jpg?s=612x612&w=0&k=20&c=4FMvHEkG3FH6fpaE355CnUSdXtV4LlqCBF9etWbNR6o="
     },
    { title: "Tokyo, Japan",
      img : "https://media.istockphoto.com/id/876560704/photo/fuji-japan-in-spring.jpg?s=612x612&w=0&k=20&c=j1VZlzfNcsjQ4q4yHXJEohSrBZJf6nUhh2_smM4eioQ="
     },
    { title: "Singapore, Singapore",
      img: "https://img.freepik.com/free-photo/merlion-statue-cityscape-singapore_335224-666.jpg?semt=ais_incoming&w=740&q=80"
     },
    { title: "Bangkok, Thailand",
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
     },
  ];

   const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
      <div className="p-4">
        <h2 className="text-[#40858a] text-3xl font-medium">
          Last Minutes Offers
        </h2>
        <h2 className="text-xl mb-6">
          Last Minute Offers From Selected Destination
        </h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              onClick={()=>handleClick()}   
              className=" h-56 w-full rounded-lg overflow-hidden bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage:
                  `url(${offer.img})`,
              }}
            >
               
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
