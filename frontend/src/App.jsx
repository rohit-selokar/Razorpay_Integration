import React from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Basic from "./pages/Basic";
import Premium from "./pages/Premium";
import Ultimate from "./pages/Ultimate"
import Footer from "./component/Footer"

import About from "./pages/About";
const App = () => {
  return (
    <div className="font-manrope">
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/ultimate" element={<Ultimate/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/mealplan" element={<Ultimate/>}/>
      </Routes>

      <Footer/>
    </div>
  );
};

export default App;
