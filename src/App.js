import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import ContentContactUs from "./Pages/ContactUs/ContentContactUs";
import ContentPakage from "./Pages/PakagesCategory/ContentPakage";
import ContentAbout from "./Pages/About/ContentAbout";
import ShowPakages from "./Pages/PakagesCategory/ShowPakages";




function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/contact-us" element={<ContentContactUs/>}/>
    <Route path="/login" element={<ContentPakage/>}/>
    <Route path="/about" element={<ContentAbout/>}/>
    <Route path="/pakages" element={<ShowPakages/>}/>





  </Routes>
  
  </BrowserRouter>
   
   </>
  );
}

export default App;
