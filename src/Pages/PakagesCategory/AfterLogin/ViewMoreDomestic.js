import { useNavigate } from "react-router-dom";

function ViewMoreDomestic() {
  const navigate = useNavigate();

  const packages = [
    { title: "LADAKH", img: "https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=" },
    { title: "KASHMIR", img: "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=" },
    { title: "KERALA", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a9/f3/43/great-views.jpg?w=900&h=-1&s=1" },
    { title: "ANDAMAN", img: "https://holidays.tripfactory.com/blogs/wp-content/uploads/sites/6/2024/05/Andaman-Trip.webp" },
    { title: "KARNATAKA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CRQT4Jtq45V2cPN6OK7j4ZBpjkHMeCR60g&s" },
    { title: "SIKKIM", img: "https://maduratravel.com/wp-content/uploads/2025/06/Gemini_Generated_Image_sllnu9sllnu9slln-636x636.png" },
    { title: "HIMACHAL", img: "https://static.toiimg.com/thumb/msid-118539018,width-400,resizemode-4/118539018.jpg" },
    { title: "UTTARAKHAND", img: "https://static.toiimg.com/thumb/msid-118539018,width-400,resizemode-4/118539018.jpg" },
  ];


  const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <div className="px-4 sm:px-6 py-10 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#246e73] mb-10">
          Domestic Packages
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
    </>
  );
}

export default ViewMoreDomestic;
