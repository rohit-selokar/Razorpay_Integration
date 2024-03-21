import React from "react";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Basic from "./pages/Basic";
import Premium from "./pages/Premium";
import Ultimate from "./pages/Ultimate"
import Footer from "./component/Footer"
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basic" element={<Basic/>}/>
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/ultimate" element={<Ultimate/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
