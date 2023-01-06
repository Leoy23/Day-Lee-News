import React from "react";
import "./Navbar.css";
import logo from "../../assets/DLN_logo.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";

const Navbar = ({ handleOpen }) => {
  return (
    <nav>
      <div className="logo-box box">
        <Link to="/">
          <img src={logo} alt="news reader logo" className="dln-logo" />
        </Link>
      </div>
      <div className="nav-icon-box">
        <div className="search-icon box" onClick={handleOpen}>
          <SearchRoundedIcon fontSize="large" sx={{ color: "#b89d40" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
