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
    <footer className="bg-[#40858a] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        
    
        <div>
          <h3 className="font-bold text-lg mb-4">Mohali, Chandigarh (Head Office)</h3>
           <p>
            Plot No. F-539 Mohali Tower 4th Floor Industrial Area Phase 8B Sas Nagar Mohali 160055 | Telephone No : 0172 - 4104097
           </p>
        </div>

      
        <div>
          <h3 className="font-bold text-lg mb-4">Mumbai</h3>
          <p>
            201 - Harshal Apt. - Virar West - Mumbai - 401303
          </p>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-4">Andaman</h3>
          <p>
            Muthumariamman Temple - Near Vitala Public School - Hope Town - Andaman - 744107- Telephone No : 03192-258054 | +91 977 977 5698
          </p>
        </div>

         <div>
          <h3 className="font-bold text-lg mb-4">Srinagar</h3>
          <p>
           Arrish Shopping Complex Model Town D, Sopore, Jammu and Kashmir 193201
          </p>
        </div>

     
        <div>
          <h3 className="font-bold text-lg mb-4">Leh-Ladakh</h3>
          <p className="text-sm mb-2">Near Central Institute of Buddhist Studies, Choglamsar Leh – 194 101 | Ladakh (U.T.) | Phone: +91 1982 265 557 |+91 977 977 55 29</p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
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

