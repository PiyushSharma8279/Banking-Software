import { useNavigate } from "react-router-dom";

function ViewMoreDomestic() {
  const navigate = useNavigate();

  const packages = [
    { title: "LADAKH", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-6-2-1.png" },
    { title: "KASHMIR", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-2-2.png" },
    { title: "KERALA", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-3-2.png" },
    { title: "ANDAMAN", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-5-2-1.png" },
    { title: "KARNATAKA", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-24.png" },
    { title: "SIKKIM", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-1-1.png" },
    { title: "HIMACHAL", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-2023-07-12T135702.907.png" },
    { title: "UTTARAKHAND", img: "https://t2tworld.com/wp-content/uploads/2023/07/image-4-2.png" },
  ];

  
  const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="px-4 sm:px-6 py-10 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#246e73] mb-10">
        Domestic Safarnama Packages
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
                className="mt-4 w-full border border-[#246e73] bg-[#246e73] text-white px-4 py-2 rounded-full font-medium hover:bg-white hover:text-[#246e73] transition"
                onClick={() => navigate(`/tour-packages/${createSlug(pkg.title)}`)}
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

export default ViewMoreDomestic;
