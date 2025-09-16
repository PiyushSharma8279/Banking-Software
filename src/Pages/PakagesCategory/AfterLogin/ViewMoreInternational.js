import { useState } from "react";

function ViewMoreInternational() {
  const [showModal, setShowModal] = useState(false);

  const packages = [
    { title: "DUBAI", img: "https://t2tworld.com/wp-content/uploads/2023/06/1.jpg" },
    { title: "THAILAND", img: "https://t2tworld.com/wp-content/uploads/2023/06/2.jpg" },
    { title: "MALDIVES", img: "https://t2tworld.com/wp-content/uploads/2023/06/maldives.jpg" },
    { title: "INDONESIA", img: "https://t2tworld.com/wp-content/uploads/2023/06/3.jpg" },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#246e73] mb-10">
        International Safarnama Packages
      </h2>

      {/* Package Cards */}
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
                onClick={() => setShowModal(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          {/* Modal Box */}
          <div className="bg-[#083d56] text-white p-6 rounded-lg w-[90%] max-w-4xl relative mt-[50px] overflow-y-auto">
            {/* Close Btn */}
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <h2 className="text-center text-2xl font-bold mb-6">
              International Query Form
            </h2>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Destination */}
              <div className="flex flex-col gap-1">
                <label>Destination *</label>
                <input type="text" className="p-2 rounded text-black" />
              </div>

              {/* Nights */}
              <div className="flex flex-col gap-1">
                <label>No of Nights *</label>
                <input type="number" className="p-2 rounded text-black" />
              </div>

              {/* Hotel Category */}
              <div className="flex flex-col gap-1">
                <label>Hotel Category *</label>
                <select className="p-2 rounded text-black">
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>

              {/* Rooms */}
              <div className="flex flex-col gap-1">
                <label>No of Rooms *</label>
                <input type="number" className="p-2 rounded text-black" />
              </div>

              {/* Check In Date */}
              <div className="flex flex-col gap-1">
                <label>Check In Date *</label>
                <input type="date" className="p-2 rounded text-black" />
              </div>

              {/* Check Out Date */}
              <div className="flex flex-col gap-1">
                <label>Check Out Date *</label>
                <input type="date" className="p-2 rounded text-black" />
              </div>

              {/* Visa Type */}
              <div className="flex flex-col gap-1">
                <label>Visa Type *</label>
                <select className="p-2 rounded text-black">
                  <option>Tourist</option>
                  <option>Business</option>
                </select>
              </div>

              {/* Insurance */}
              <div className="flex flex-col gap-1">
                <label>Insurance *</label>
                <select className="p-2 rounded text-black">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Extra Bed */}
              <div className="flex flex-col gap-1">
                <label>No of Extra Bed</label>
                <input type="number" className="p-2 rounded text-black" />
              </div>

              {/* Meal Plan */}
              <div className="flex flex-col gap-1">
                <label>Meal Plan *</label>
                <select className="p-2 rounded text-black">
                  <option>Breakfast</option>
                  <option>Half Board</option>
                  <option>Full Board</option>
                </select>
              </div>

              {/* Child Without Bed */}
              <div className="flex flex-col gap-1">
                <label>Child Without Bed</label>
                <select className="p-2 rounded text-black">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Transfer */}
              <div className="flex flex-col gap-1">
                <label>Transfer</label>
                <select className="p-2 rounded text-black">
                  <option>Included</option>
                  <option>Excluded</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-1 col-span-2">
                <label>Mobile No *</label>
                <input type="text" className="p-2 rounded text-black" />
              </div>

              {/* Additional Info */}
              <div className="flex flex-col gap-1 col-span-2">
                <label>Additional Information</label>
                <textarea className="p-2 rounded text-black"></textarea>
              </div>

              {/* Submit */}
              <button className="col-span-2 bg-[#246e73] py-2 rounded text-white font-bold hover:bg-white hover:text-[#246e73] transition">
                Submit
              </button>
            </form>
          </div>
        </div>

      )}
    </div>
  );
}

export default ViewMoreInternational;
