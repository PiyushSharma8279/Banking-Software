import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HIMACHAL from "../../Images/himachal.jpg";
import KARNATAKA from "../../Images/karnataka.jpeg";
import KASHMIR from "../../Images/kashmir.jpeg";
import KERALA from "../../Images/kerala.webp";
import LADAKH from "../../Images/leh.jpg";
import SIKKIM from "../../Images/sikkim.jpeg";
import UTTARAKHAND from "../../Images/uttrakhand.jpeg";
import ANDAMAN from "../../Images/andman.jpg";

function TourPakages() {
  const { category } = useParams();
  const categoryName = category.replace(/-/g, " ").toUpperCase();

  // Map category name → image
  const images = {
    HIMACHAL,
    KARNATAKA,
    KASHMIR,
    KERALA,
    LADAKH,
    SIKKIM,
    UTTARAKHAND,
    ANDAMAN,
  };
  const bgImage = images[categoryName] || HIMACHAL;

  // Sections data
  const sections = [
    { id: "sec1", label: "04 Nights 05 Days" },
    { id: "sec2", label: "05 Nights 06 Days" },
    { id: "sec3", label: "06 Nights 07 Days" },
    { id: "sec5", label: "07 Nights 08 Days" },
  ];

  // refs for scrollspy
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => {
      if (sectionRefs.current[s.id]) {
        observer.observe(sectionRefs.current[s.id]);
      }
    });

    return () => observer.disconnect();
  }, []);

  const packages = [
    { title: "Basic Packages", code: "T2T05LA01", price: "7,499", img: "https://picsum.photos/400/250?random=1" },
    { title: "Deluxe Packages", code: "T2T05LA02", price: "8,999", img: "https://picsum.photos/400/250?random=2" },
    { title: "Deluxe Plus Packages", code: "T2T05LA03", price: "11,999", img: "https://picsum.photos/400/250?random=3" },
    { title: "Basic Packages", code: "T2T05LA04", price: "8,999", img: "https://picsum.photos/400/250?random=4" },
    { title: "Deluxe Packages", code: "T2T05LA05", price: "10,499", img: "https://picsum.photos/400/250?random=5" },
    { title: "Deluxe Plus Packages", code: "T2T05LA06", price: "12,999", img: "https://picsum.photos/400/250?random=6" },
    { title: "Basic Packages", code: "T2T05LA07", price: "11,499", img: "https://picsum.photos/400/250?random=7" },
    { title: "Deluxe Packages", code: "T2T05LA08", price: "13,999", img: "https://picsum.photos/400/250?random=8" },
    { title: "Deluxe Plus Packages", code: "T2T05LA09", price: "15,999", img: "https://picsum.photos/400/250?random=9" },
    { title: "Basic Packages", code: "T2T05LA07", price: " 12,499", img: "https://picsum.photos/400/250?random=7" },
    { title: "Deluxe Packages", code: "T2T05LA08", price: " 14,999", img: "https://picsum.photos/400/250?random=8" },
    { title: "Deluxe Plus Packages", code: "T2T05LA09", price: "17,999", img: "https://picsum.photos/400/250?random=9" },
  
];

  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-center text-white font-bold text-4xl px-6 py-2 rounded-lg bg-black/40">
          {categoryName} PACKAGES
        </h2>
      </div>

      <div className=" p-2 shadow-md m-6">
        <h2 className=" text-2xl font-bold py-1">About {categoryName}</h2>
        <p>{categoryName} is a city in Indian-administered {categoryName} . It is the largest city and the joint capital of {categoryName}, which is an Indian-administered union territory. {categoryName} was also the historical capital of the Kingdom of {categoryName}.</p>
        
      </div>
      <div className="flex mt-20 px-6">
        {/* Sidebar */}
        <aside className="w-1/4 sticky top-24 h-fit bg-white shadow-md rounded-lg p-4">
          <h2 className="font-bold text-lg mb-3">PACKAGES</h2>
          <ul className="space-y-2 text-gray-700 font-medium">
            {sections.map((s) => (
              <li
                key={s.id}
                className={`cursor-pointer rounded ${
                  activeSection === s.id ? " text-blue-600 font-semibold" : ""
                }`}
                onClick={() => {
                  sectionRefs.current[s.id]?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Cards */}
        <main className="w-3/4 ml-6 space-y-16">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} ref={(el) => (sectionRefs.current[s.id] = el)}>
              <h2 className="text-center font-bold text-xl p-2">
                <span className="text-blue-600">{s.label}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.slice(i * 3, i * 3 + 3).map((pkg, index) => (
                  <div
                    key={index}
                    className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white"
                  >
                    <img
                      src={pkg.img}
                      alt={pkg.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-3">{pkg.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Booking Code: {pkg.code}
                    </p>

                    <div className="flex gap-3 text-gray-600 mt-3 text-[12px]">
                      <span>🍽 Meal</span>
                      <span>🏨 Hotel</span>
                      <span>🚗 Transfer</span>
                      <span>👓 Sightseeing</span>
                    </div>

                    <p className="mt-3 text-gray-500 text-sm">Starting Price</p>
                    <h4 className="text-blue-600 font-bold text-xl">
                      INR {pkg.price}/-*
                    </h4>
                    <p className="text-sm text-gray-500">Per Person</p>

                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                      VIEW DETAILS
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </>
  );
}

export default TourPakages;
