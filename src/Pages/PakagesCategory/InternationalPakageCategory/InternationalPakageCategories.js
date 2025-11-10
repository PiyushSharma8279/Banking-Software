import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function InternationalPakageCategories() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.3 }
    );

    const sections = Object.values(sectionRefs.current).filter(Boolean);
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const destinations = {
    dubai: {
      name: "Dubai",
      image:
        "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612",
      description:
        "Experience the glitz and glamour of Dubai — where futuristic architecture meets traditional souks. Enjoy desert safaris, luxury shopping, and stunning skyline views.",
      packages: [
        {
          id: 1,
          title: "Dubai Gold Tour",
          type: "Luxury",
          price: "49999",
          package_code: "DXB-001",
          image:
            "https://images.unsplash.com/photo-1606761568499-6d2451b23c56",
        },
        {
          id: 2,
          title: "Dubai Budget Explorer",
          type: "Budget",
          price: "29999",
          package_code: "DXB-002",
          image:
            "https://images.unsplash.com/photo-1546412414-8035e1776c1c",
        },
      ],
    },
    thailand: {
      name: "Thailand",
      image:
        "https://media.istockphoto.com/id/2149112736/photo/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg",
      description:
        "Thailand — the land of smiles! Explore stunning beaches, temples, floating markets, and mouth-watering street food.",
      packages: [
        {
          id: 1,
          title: "Bangkok & Pattaya Tour",
          type: "Couple",
          price: "25999",
          package_code: "TH-001",
          image:
            "https://images.unsplash.com/photo-1601233740629-1f7c7d8a7db7",
        },
      ],
    },
      maldives: {
      name: "Maldives",
      image:
        "https://media.istockphoto.com/id/2149112736/photo/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg",
      description:
        "Thailand — the land of smiles! Explore stunning beaches, temples, floating markets, and mouth-watering street food.",
      packages: [
        {
          id: 1,
          title: "Bangkok & Pattaya Tour",
          type: "Couple",
          price: "25999",
          package_code: "TH-001",
          image:
            "https://images.unsplash.com/photo-1601233740629-1f7c7d8a7db7",
        },
      ],
    },
      indonesia: {
      name: "Indonesia",
      image:
        "https://media.istockphoto.com/id/2149112736/photo/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg",
      description:
        "Thailand — the land of smiles! Explore stunning beaches, temples, floating markets, and mouth-watering street food.",
      packages: [
        {
          id: 1,
          title: "Bangkok & Pattaya Tour",
          type: "Couple",
          price: "25999",
          package_code: "TH-001",
          image:
            "https://images.unsplash.com/photo-1601233740629-1f7c7d8a7db7",
        },
      ],
    },
  };

  const locationData = destinations[slug];

  if (!locationData) {
    return (
      <p className="text-center text-gray-600 mt-10">
        Destination not found.
      </p>
    );
  }

  return (
    <>
      
      <div
        className="relative w-full h-60 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${locationData.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative text-white font-bold text-3xl md:text-5xl">
          {locationData.name} Packages
        </h2>
      </div>

   
      <div className="p-6 shadow-md m-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          About {locationData.name}
        </h2>
        <p className="text-gray-700">{locationData.description}</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mb-10">
        {locationData.packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-lg shadow hover:shadow-lg transition hover:scale-[1.02] bg-white p-4 cursor-pointer"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">
              {pkg.type} PACKAGE
            </h3>
            <h4 className="font-semibold">{pkg.title}</h4>
            <p className="text-gray-500 text-sm">Code: {pkg.package_code}</p>
            <h4 className="text-blue-600 font-bold text-xl mt-2">
              ₹{pkg.price}/-
            </h4>
            <button
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => navigate(`/package/${pkg.package_code}`)}
            >
              VIEW DETAILS
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default InternationalPakageCategories;
