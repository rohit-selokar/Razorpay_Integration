import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" h-20 bg-white font-semibold flex justify-between lg:justify-around px-3 items-center shadow-sm sticky top-0 z-50">
      <div>
        <p className="cursor-pointer">
          <Link to="/">
            <img src={logo} className="w-[90px] h-auto" />
          </Link>
        </p>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-black fa-xl"></i>
      </div>

      <div
        className={`lg:flex absolute top-16 left-0 right-0 bg-[#7ad03a] mx-24 my-3 py-4 rounded-xl ${
          menuOpen ? "block" : "hidden"
        } lg:static lg:bg-transparent lg:p-0`}
      >
        <ul className="flex flex-col items-center lg:flex-row lg:items-center">
          <Link to="/">
            <li className="lg:ml-8 cursor-pointer">Home</li>
          </Link>

          
          <Link to="/mealplan">
            <li className="lg:ml-8 cursor-pointer">Meal Plans</li>
          </Link>
          
          <li className="lg:ml-8 cursor-pointer">Health coaching</li>
          <li className="lg:ml-8 cursor-pointer">Products</li>
          <li className="lg:ml-8 cursor-pointer"></li>
          
          <Link to="/about">
            <li className=" cursor-pointer">About Us</li>
          </Link>
          <li className="lg:hidden">
            <button className="bg-red-600 my-2 text-white p-3 px-3 rounded-full">
              Call: 9322547896
            </button>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <button className="bg-red-600 text-white p-3 px-3 rounded-full hover:bg-[#7ad03a]">
          Call: 9322547896
        </button>
      </div>
    </nav>
  );
};

export default Header;
