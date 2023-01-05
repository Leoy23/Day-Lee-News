import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/DLN_logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const Navbar = ({ handleOpen }) => {
  return (
    <nav>
      <div className="logo-box box">
        <img src={logo} alt="" className="site-logo" height="150px" />
      </div>
      <div className="nav-icon-box">
        <NavLink to="/about">
          <div className="about-icon box">
        <InfoRoundedIcon fontSize="large" sx={{ color: "#b89d40" }}/>
          </div>
        </NavLink>
          <div className="search-icon box" onClick={handleOpen}>
          <SearchRoundedIcon fontSize="large" sx={{ color: "#b89d40" }}/>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

