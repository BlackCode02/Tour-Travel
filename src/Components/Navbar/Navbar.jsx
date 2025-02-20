import React, { useState } from "react";
import "./Navbar.css";
import logo from "./travel-logo.jpeg";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header-navbar">
        <div className="logo-conatiner">
          <img src={logo} alt="Travels-logo" />
          <span>
            <Link to="/">Shivaaksh Travels</Link>
          </span>
        </div>
        <div className="hamburger-container" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-container ${isOpen ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/tourpackage">Tour Packages</NavLink>
            </li>
            <li>
              <NavLink to="/gallary">Our Gallary</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
