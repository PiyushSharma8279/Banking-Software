import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import ContentContactUs from "./Pages/ContactUs/ContentContactUs";
import ContentPakage from "./Pages/PakagesCategory/ContentPakage";
import ContentAbout from "./Pages/About/ContentAbout";




function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/contact-us" element={<ContentContactUs/>}/>
    <Route path="/pakages" element={<ContentPakage/>}/>
    <Route path="/about" element={<ContentAbout/>}/>




  </Routes>
  
  </BrowserRouter>
   
   </>
  );
}

export default App;
