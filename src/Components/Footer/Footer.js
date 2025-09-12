import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#40858a] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
    
        <div>
          <h3 className="font-bold text-lg mb-4">DOMESTIC FLIGHTS</h3>
          <ul className="space-y-2 text-sm">
            <li>Flight from Delhi to Dubai</li>
            <li>Flight from Delhi to New York</li>
            <li>Flight from Delhi to London</li>
            <li>Flight from Delhi to Barcelona</li>
            <li>Flight from Delhi to Paris</li>
            <li>Flight from Delhi to Sydney</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-bold text-lg mb-4">OTHER DESTINATIONS</h3>
          <ul className="space-y-2 text-sm">
            <li>Singapore, Singapore</li>
            <li>Bangkok, Thailand</li>
            <li>Hotels in Oslo, Norway</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-4">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <p className="text-sm mb-2">+91 000 000 0000</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-green-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

