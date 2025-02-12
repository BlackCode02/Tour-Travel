import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Tour from "./Components/TourPackage/Tour";
import Home from "./Components/Home/Home";
import Gallary from "./Components/Gallary/Gallary";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tourpackage" element={<Tour />} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
