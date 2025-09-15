// import React from "react";

// function TrendingCities() {
//   const cities = [
//     { from: "DELHI", to: "Kolkata", img: "https://www.adivaha.com/demo/whitelabel12/images/secton02img01.jpg" },
//     { from: "DELHI", to: "Mumbai", img: "https://www.adivaha.com/demo/whitelabel12/images/mumbai-bus.png" },
//     { from: "DELHI", to: "Goa", img: "https://www.adivaha.com/demo/whitelabel12/images/goa-bus.png" },
//     { from: "DELHI", to: "Manali", img: "https://www.adivaha.com/demo/whitelabel12/images/manali-bus.png" },
//     { from: "DELHI", to: "Dehradun", img: "https://www.adivaha.com/demo/whitelabel12/images/dehradun-bus.png" },
//     { from: "DELHI", to: "Jaipur", img: "https://www.adivaha.com/demo/whitelabel12/images/jaipur-bus.png" },
//     { from: "DELHI", to: "Rishikesh", img: "https://www.adivaha.com/demo/whitelabel12/images/rishikesh-bus.png" },
//     { from: "DELHI", to: "Varanasi", img: "https://www.adivaha.com/demo/whitelabel12/images/varanasi-bus.png" },
//   ];

//    const handleClick = (city) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log("Clicked city:", city.to);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-[#40858a] text-3xl font-semibold mb-2 ">
//         TRENDING CITIES
//       </h2>
//       <h3 className="text-lg mb-8 text-gray-700 ">
//         The most searched cities
//       </h3>

      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cities.map((city, index) => (
//           <div
//             key={index}
//              onClick={() => handleClick(city)}
//             className="flex bg-white rounded-xs overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition"
//           >
            
//             <img
//               src={city.img}
//               alt={city.to}
//               className="w-40 h-32 object-cover"
//             />

            
//             <div className="p-4 flex flex-col justify-center">
//               <p className="text-gray-600 text-sm">{city.from}</p>
//               <h2 className="text-xl font-semibold text-gray-900">{city.to}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrendingCities;
