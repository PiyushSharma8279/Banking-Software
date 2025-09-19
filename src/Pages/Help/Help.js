import React from "react";

function Help() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">
      <div className="w-full max-w-6xl  rounded-2xl p-8 md:p-12">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Simply fill in the form providing your contact details and some
            information about your query. We'll get back to you as soon as we
            can.
          </p>
        </div>

        {/* Main Content - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Address</h3>
              <p className="text-gray-600">
                5th Floor, RMZ Latitude Commercial, Near Hebbal, Bangalore - 560092
              </p>
            </div>
            <hr />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Email</h3>
              <p className="text-gray-600">safarnama@nexusdmc.com</p>
            </div>
            <hr />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
              <p className="text-gray-600">0000000000</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
