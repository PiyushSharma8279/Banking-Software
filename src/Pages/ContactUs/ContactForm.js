import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contact from "../../Images/contactUs.webp";

function ContactUsForm() {
    return (

        <>
            <div
                className="w-full h-80 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${contact})`,
                }}
            >
                {/* Text overlay */}
                <h2 className="text-center text-white font-semibold text-3xl  px-6 py-2 rounded-lg">
                    Contact Us
                </h2>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Section - Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Get In Touch / Contact Us:</h2>
                        <p className="mb-6 text-gray-600">
                            Please fill the form on your right and get in touch with our support team.
                            We will answer your questions as soon as possible.
                        </p>

                        {/* Address */}
                        <div className="flex items-start mb-4">
                            <FaMapMarkerAlt className="text-green-700 text-2xl mr-3 mt-1" />
                            <p>
                                <span className="font-semibold">Company Address:</span> <br />
                                252-E, 1st Floor, Sant Nagar, East of Kailash, New Delhi, Delhi, India 110065
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start mb-4">
                            <FaPhoneAlt className="text-green-700 text-2xl mr-3 mt-1" />
                            <p>
                                <span className="font-semibold">Mobile:</span> <br />
                                +91 000 000 0000
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-start mb-4">
                            <FaEnvelope className="text-green-700 text-2xl mr-3 mt-1" />
                            <p>
                                <span className="font-semibold">Email:</span> <br />
                                wl15.@thewebconz.com
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Send Us A Message</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-green-800 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUsForm;
