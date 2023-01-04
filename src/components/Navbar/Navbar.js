import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/DLN_logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        <img src={logo} alt="" className="site-logo" height="150px" />
      </div>
      <div className="nav-icon-box">
        <NavLink to="/about">
          <img src="" alt="about page icon" className="about-icon" />
        </NavLink>
        <NavLink to="/search">
          <img src="" alt="search page icon" className="about-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

