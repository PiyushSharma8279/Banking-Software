
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PackageDetails() {
  const { slug } = useParams(); // slug = package_code
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const IMAGE_BASE_URL = "https://demandonsale.com/trav-chap/";

  useEffect(() => {
    const controller = new AbortController();

    const fetchPackage = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.codetabs.com/v1/proxy?quest=https://demandonsale.com/trav-chap/api/package/${slug}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch package data");

        const result = await res.json();
        if (result.status && result.data) {
          setPackageData(result.data);
        } else {
          throw new Error("Invalid API response");
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
    return () => controller.abort();
  }, [slug]);

  if (loading)
    return <p className="text-center mt-10 text-gray-600 font-medium">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10 font-semibold">{error}</p>;
  if (!packageData) return null;

  const {
    title,
    price,
    duration,
    image,
    location,
    day_details,
    inclusion,
    exclusion,
    note,
    addtional_charge,
    booking_payment_policy,
    booking_cancellation_policy,
    booking_validity,
    person_2,
    person_4,
    person_6,
    extra_bed,
    child_no_bed,
    hotel,
  } = packageData;

  return (
    <div className="pb-10">
      {/* Hero Background Section */}
      <div
        className="relative w-full h-60 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative text-center text-white font-bold text-2xl md:text-4xl px-4 py-2 rounded-lg">
          {title}
        </h2>
      </div>

      <div className="p-6 md:p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Package Details: {slug}</h2>

        {/* Package Info Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border p-2">Duration</th>
                <th className="border p-2">Destination</th>
                <th className="border p-2">Hotel Name</th>
                <th className="border p-2">Room Type</th>
                <th className="border p-2">Meal Plan</th>
                <th className="border p-2">City</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border p-2">{duration}</td>
                <td className="border p-2">{location?.name}</td>
                <td className="border p-2">{hotel?.hotel_name}</td>
                <td className="border p-2">{hotel?.hotel_star}-Star</td>
                <td className="border p-2">Breakfast & Dinner</td>
                <td className="border p-2">{hotel?.city}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Package Cost</th>
                <th className="border p-2">2 Person</th>
                <th className="border p-2">4 Person</th>
                <th className="border p-2">6 Person</th>
                <th className="border p-2">Extra Bed</th>
                <th className="border p-2">Child Without Bed</th>
                <th className="border p-2">Booking Validity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border p-2">₹{price}/-</td>
                <td className="border p-2">₹{person_2}/-</td>
                <td className="border p-2">₹{person_4}/-</td>
                <td className="border p-2">₹{person_6}/-</td>
                <td className="border p-2">₹{extra_bed}/-</td>
                <td className="border p-2">₹{child_no_bed}/-</td>
                <td className="border p-2">{booking_validity}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            CUSTOMIZE YOUR PACKAGE
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => setShowModal(true)}
          >
            BOOK NOW
          </button>
        </div>

        {/* Inclusion / Exclusion / Notes */}
        <div className="grid md:grid-cols-4 gap-6 mt-10 text-sm">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold mb-2">Package Inclusion</h3>
            <div dangerouslySetInnerHTML={{ __html: inclusion }} />
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold mb-2">Package Exclusion</h3>
            <div dangerouslySetInnerHTML={{ __html: exclusion }} />
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold mb-2">Note</h3>
            <div dangerouslySetInnerHTML={{ __html: note }} />
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h3 className="font-bold mb-2">Additional Charges</h3>
            <div dangerouslySetInnerHTML={{ __html: addtional_charge }} />
          </div>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          DAY-WISE <span className="text-blue-600">ITINERARY</span>
        </h2>
        <div
          className="space-y-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: day_details }}
        />
      </div>

      {/* Payment & Cancellation Policies */}
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4 text-center">
            BOOKING PAYMENT POLICY
          </h3>
          <div dangerouslySetInnerHTML={{ __html: booking_payment_policy }} />
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4 text-center">
            BOOKING CANCELLATION POLICY
          </h3>
          <div dangerouslySetInnerHTML={{ __html: booking_cancellation_policy }} />
        </div>
      </div>

      {/* Modal (same as before) */}
      {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start md:items-center z-50 overflow-y-auto">
                    
                    <div className="bg-[#083d56] text-white p-6 rounded-lg w-[95%] md:w-[90%] max-w-4xl relative mt-6 md:mt-20 overflow-y-auto max-h-[90vh]">
                        
                        <button
                            className="absolute top-2 right-2 text-white text-xl font-bold"
                            onClick={() => setShowModal(false)}
                        >
                            ✖
                        </button>

                        <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
                            Booking Now
                        </h2>

                        
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            <div className="flex flex-col gap-1">
                                <label>Hotel Place *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>First Guest Name *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                           
                            <div className="flex flex-col gap-1">
                                <label>Hotel Category *</label>
                                <select className="p-2 rounded text-black">
                                    <option>Select Hotel Category</option>
                                    <option>3 Star</option>
                                    <option>4 Star</option>
                                    <option>5 Star</option>
                                </select>
                            </div>

                           
                            <div className="flex flex-col gap-1">
                                <label>Room Type *</label>
                                <select className="p-2 rounded text-black">
                                     <option>Select Room Type</option>
                                    <option>Base</option>
                                    <option>Second</option>
                                    <option>Third</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>No of Nights *</label>
                                <input type="number" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>No of Rooms *</label>
                                <input type="number" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Check In Date *</label>
                                <input type="date" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1">
                                <label>Check Out Date *</label>
                                <input type="date" className="p-2 rounded text-black" />
                            </div>

                            
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
                                <label>Meal Plan *</label>
                                <select className="p-2 rounded text-black">
                                    <option>Room with no meal</option>
                                    <option>Breakfast</option>
                                    <option>Breakfast and Dinner</option>
                                    <option>Breakfast with lunch dinner</option>
                                </select>
                            </div>

                            
                            <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                                <label>Mobile No *</label>
                                <input type="text" className="p-2 rounded text-black" />
                            </div>

                            
                            <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
                                <label>Additional Information</label>
                                <textarea className="p-2 rounded text-black"></textarea>
                            </div>

                            
                            <button
                                type="submit"
                                className="col-span-1 md:col-span-2 bg-[#246e73] py-2 rounded text-white font-bold hover:bg-white hover:text-[#246e73] transition"
                            >
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
