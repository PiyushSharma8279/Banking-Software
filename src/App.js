import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import ContentContactUs from "./Pages/ContactUs/ContentContactUs";
import ContentPakage from "./Pages/PakagesCategory/ContentPakage";
import ContentAbout from "./Pages/About/ContentAbout";
import ShowPakages from "./Pages/PakagesCategory/AfterLogin/ShowPakages";
import TourPakagesContent from "./Pages/TourPakages/TourPakagesContent";
import ContentHotelsGrid from "./Pages/PakagesCategory/AfterLogin/HotelsDetailsPage/ContentHotelsGrid";
import PakageDetailsContent from "./Pages/TourPakages/TourPakageDetailspage/PakageDetailsContent";
import PakageRegisterContent from "./Pages/PakagesCategory/PakageRegister/PakageRegisterContent";




function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/contact-us" element={<ContentContactUs/>}/>
    <Route path="/login" element={<ContentPakage/>}/>
    <Route path="/register" element={<PakageRegisterContent/>}/>
    <Route path="/about" element={<ContentAbout/>}/>
    <Route path="/pakages" element={<ShowPakages/>}/>
    <Route path="/tour-packages/:category" element={<TourPakagesContent/>}/>
    <Route path="/hotels/:category" element={<ContentHotelsGrid/>}/>
    <Route path="/package/:slug" element={<PakageDetailsContent/>}/>





  </Routes>
  
  </BrowserRouter>
   
   </>
  );
}

export default App;
