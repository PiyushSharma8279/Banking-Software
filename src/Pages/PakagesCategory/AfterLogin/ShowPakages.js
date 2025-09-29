import React, { useState, useEffect } from "react";
import Sidebar from "../../../Components/Home/Sidebar";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ViewMoreDomestic from "./ViewMoreDomestic";
import ViewMoreInternational from "./ViewMoreInternational";
import ViewMorePan from "./ViewMorePan";

function ShowPakages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

 
  const slides = [
    {
      img: "https://www.swadestravels.com/assets/img/holidays_packeges/domestic_packeges.jpg", 
      title: "Domestic Packages"
    },
    {
      img: "https://5.imimg.com/data5/SELLER/Default/2023/4/297084137/ZR/MH/GQ/9160165/international-tour-package.jpg", 
      title: "International Packages"
    },
    {
      img: "https://www.shutterstock.com/image-photo/tour-packages-concept-collage-travel-260nw-641820484.jpg", 
      title: "Pan India Packages"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`transition-all duration-300 mt-[72px] 
          ${isOpen ? "ml-0 sm:ml-56" : "ml-0 sm:ml-16"}
        `}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

         
        <div>
          <div
            className="w-full h-96 bg-cover bg-center flex items-center justify-center transition-all duration-700"
            style={{
              backgroundImage: `url(${slides[currentSlide].img})`,
            }}
          >
            
            <h2 className="text-center text-white font-bold text-4xl px-6 py-2 rounded-lg bg-black/40">
              {slides[currentSlide].title}
            </h2>
          </div>
        </div>

         
        <ViewMoreDomestic />
        <ViewMoreInternational />
        <ViewMorePan />

        <Footer />
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
