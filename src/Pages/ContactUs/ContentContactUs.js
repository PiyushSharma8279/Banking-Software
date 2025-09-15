import React, { useState } from "react";
import Sidebar from "../../Components/Home/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactUsForm from "./ContactForm";


function ContentContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
    
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      
      <div
        className={`transition-all duration-300 mt-[72px] 
          ${isOpen ? "ml-0 sm:ml-56" : "ml-0 sm:ml-16"}
        `}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContactUsForm/>

        
        
        <Footer/>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default ContentContactUs;
