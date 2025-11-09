import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InternationalPakages() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const packages = [
    {
      title: "DUBAI",
      slug: "dubai",
      img: "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=",
    },
    {
      title: "THAILAND",
      slug: "thailand",
      img: "https://media.istockphoto.com/id/2149112736/photo/wat-arun-temple-at-sunset-bangkok-in-thailand.jpg?s=612x612&w=0&k=20&c=1JqYAueTVDWfnj8iwCRlS_VIp-3YBeDp6Wp-Pq19qVk=",
    },
    {
      title: "MALDIVES",
      slug: "maldives",
      img: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?cs=srgb&dl=pexels-asadphoto-1483053.jpg&fm=jpg",
    },
    {
      title: "INDONESIA",
      slug: "indonesia",
      img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/09/2018-06-02_08-04-56-685.jpg",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("travchap_user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#246e73] mb-10">
        International Packages
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
              <button
                className="mt-4 w-full border border-[#246e73] text-[#246e73] px-4 py-2 rounded-lg font-medium hover:bg-[#246e73] hover:text-white transition"
                onClick={() =>
                  isLoggedIn
                    ? navigate(`/international-pakage/${pkg.slug}`)
                    : navigate("/login")
                }
              >
                {isLoggedIn ? "View More" : "Login to Check"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternationalPakages;
