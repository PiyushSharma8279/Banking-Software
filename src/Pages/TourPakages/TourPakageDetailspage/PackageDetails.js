import React, {useState} from "react";
import { useParams } from "react-router-dom";

function PackageDetails() {
  const { slug } = useParams();
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Package Details: {slug}
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="border p-2">No. Of Night</th>
              <th className="border p-2">Destination</th>
              <th className="border p-2">Hotel Name</th>
              <th className="border p-2">Room Type</th>
              <th className="border p-2">Meal Plan</th>
              <th className="border p-2">Similar Hotels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">02 Nights</td>
              <td className="border p-2">Gangtok</td>
              <td className="border p-2">Udaan Woodberry Hotel & Spa</td>
              <td className="border p-2">Standard Room</td>
              <td className="border p-2">Breakfast & Dinner</td>
              <td className="border p-2">Royal Orchid | Maple Residency</td>
            </tr>
            <tr>
              <td className="border p-2">02 Nights</td>
              <td className="border p-2">Darjeeling</td>
              <td className="border p-2">Udaan Dekeling Resort</td>
              <td className="border p-2">Deluxe Room</td>
              <td className="border p-2">Breakfast & Dinner</td>
              <td className="border p-2">Sumi Yashshree Suites | Sumitel Suites</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Package Cost */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Packages Cost</th>
              <th className="border p-2">02 Pax</th>
              <th className="border p-2">04 Pax</th>
              <th className="border p-2">06 Pax</th>
              <th className="border p-2">Extra Bed</th>
              <th className="border p-2">Child Without Bed</th>
              <th className="border p-2">Booking & Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Package Cost PP</td>
              <td className="border p-2">25999/-</td>
              <td className="border p-2">19999/-</td>
              <td className="border p-2">18999/-</td>
              <td className="border p-2">11999/-</td>
              <td className="border p-2">8999/-</td>
              <td className="border p-2">01Apr–31Jul25 | 01Oct–15Nov25</td>
            </tr>
            <tr>
              <td className="border p-2">Package Cost PP</td>
              <td className="border p-2">21999/-</td>
              <td className="border p-2">14999/-</td>
              <td className="border p-2">13999/-</td>
              <td className="border p-2">9999/-</td>
              <td className="border p-2">6499/-</td>
              <td className="border p-2">01Feb–31Mar25 | 01Aug–30Sep25</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
        onClick={() => setShowModal(true)}
        >
          CUSTOMIZE YOUR PACKAGES
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => setShowModal(true)}
        >
          BOOK NOW
        </button>
      </div>

      {/* Info Sections */}
      <div className="grid md:grid-cols-4 gap-6 mt-10 text-sm">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Packages Inclusion</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Meet and Greet Service At Airport</li>
            <li>Accommodation at Hotel</li>
            <li>Breakfast & Dinner at Hotel</li>
            <li>Private Vehicle Transfers</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Packages Exclusion</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Entrance Fees to Monuments</li>
            <li>Nathula Pass Permit Not Included</li>
            <li>Adventure Activities Extra</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Note</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>GST On Final Bill</li>
            <li>Extra Bed / Child With Bed Chargeable</li>
            <li>Below 05 Years Child Complimentary</li>
          </ul>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-2">Additional Charge</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Nathula Pass Permit ₹5500</li>
            <li>Yumthang Valley Permit ₹6000</li>
            <li>Toy Train Ticket ₹1500–2000</li>
          </ul>
        </div>
      </div>


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
                            Hotel Reservation Form
                        </h2>

                        {/* FORM */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Destination */}
                            <div className="flex flex-col gap-1">
                                <label>Hotel Place *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            {/* Nights */}
                            <div className="flex flex-col gap-1">
                                <label>
                                    First Guest Name *</label>
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
                                <label>Room Type *</label>
                                <select className="p-2 rounded text-black">
                                    <option>Base</option>
                                    <option>Second</option>
                                    <option>third</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label>No of Nights *</label>
                                <input type="Number" className="p-2 rounded text-black" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label>No of Rooms *</label>
                                <input type="Number" className="p-2 rounded text-black" />
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
                                <label>Extra Bed / Child with Bed *</label>
                                <select className="p-2 rounded text-black">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>

                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Meal Plan*</label>
                                <select className="p-2 rounded text-black">
                                    <option>Room with no meal</option>
                                    <option>Breakfast</option>
                                    <option>Breakfast and Dinner</option>
                                    <option>Breakfast with lunch dinner</option>

                                </select>
                            </div>

                           
                          
                            

                            
                           

                            

                            
                            <div className="flex flex-col gap-1 col-span-2">
                                <label>Mobile No *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1 col-span-2">
                                <label>Additional Information</label>
                                <textarea className="p-2 rounded text-black"></textarea>
                            </div>

                            
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

export default PackageDetails;
