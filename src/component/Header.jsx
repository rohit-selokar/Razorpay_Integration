import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.png"

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
           <img src={logo} className="w-[90px] h-auto"/>
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
          <Link to='/'>
          <li className="lg:ml-8 cursor-pointer">
            Home
          </li>
          </Link>
          
          {/* <Link to='/plan'> */}
          <li className="lg:ml-9 cursor-pointer">
            Meal Plans
          </li>
          {/* </Link> */}
          <li className="lg:ml-9 cursor-pointer">
            Health coaching
          </li>
          <li className="lg:ml-9 cursor-pointer">
            Products
          </li>
          <li className="lg:ml-9 cursor-pointer">
            Blog
          </li>
          <li className="lg:ml-9 cursor-pointer">
            About Us
          </li>
          <li  className="lg:ml-9 cursor-pointer">
            <button>
                Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
