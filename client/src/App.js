import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AiFinder from "./pages/AiFinder";
import MyCart from "./pages/MyCart"
import FlowerDetails from "./pages/FlowerDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/ai-finder" element={<AiFinder/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-cart" element={<MyCart/>}/>
        <Route path="/flower-details" element={<FlowerDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}