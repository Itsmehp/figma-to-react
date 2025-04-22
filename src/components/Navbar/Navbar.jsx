import React from "react";
import "./navbar.css";
import { logoblack } from "../../assets";
const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logoblack} alt="" />
        </div>
        <div className="navbar__menu">
          <a href="#home">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Use Case</a>
          <a href="#contact">Pricing</a>
          <a href="#contact">Blog</a>
          <button className="navbar__button">Request a quote</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
