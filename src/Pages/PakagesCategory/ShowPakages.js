import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Home/Sidebar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DomesticPackages from "../../Components/Home/Pakages/DomesticPakages";
import InternationalPakages from "../../Components/Home/Pakages/InternationalPakages";
import PanIndia from "../../Components/Home/Pakages/PanIndia";



function ShowPakages() {
    useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
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
        <DomesticPackages/>
        <InternationalPakages/>
        <PanIndia/>

        
        
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

export default ShowPakages;
