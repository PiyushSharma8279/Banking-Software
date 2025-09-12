import React, { useState } from "react";
import Sidebar from "../Sidebar";
import ApplicationForm from "../ApplicationForm";
import Offers from "../Offers";
import Details from "../Details";

function Content() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Content - shifted by sidebar */}
      <div
        className={`transition-all duration-300 mt-[72px] ${
          isOpen ? "ml-56" : "ml-16"
        }`}
      >
       <ApplicationForm/>
       <Offers/>
       <Details/>
        
      </div>
    </div>
  );
}

export default Content;
