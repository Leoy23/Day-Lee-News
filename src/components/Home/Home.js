import React from "react";
import "./Home.css";
import siteLogo from "../../assets/DLN.png";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <section className="home-page">
    <div className="logo-box">
      <img
        src={siteLogo}
        alt="site wallpaper"
        className="site-logo"
        width="35%"
      />
    </div>
      <Navbar />
    </section>
  );
};

export default Home;
