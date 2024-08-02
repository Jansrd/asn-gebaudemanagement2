import React from "react";
import "../assets/styles/home.css";
import HomeStart from "./HomePageComponents/HomeStart";
import HomeService from "./HomePageComponents/HomeServices";
import HomeAbout from "./HomePageComponents/HomeAbout";
import HomeContact from "./HomePageComponents/HomeContact";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content" id="home-content">
        <HomeStart />
        <HomeService />
        <HomeAbout />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
