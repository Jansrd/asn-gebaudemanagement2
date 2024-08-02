import React from "react";
import "../assets/styles/header.css";
import HeaderTop from "./Header/HeaderTop";
import HeaderBottom from "./Header/HeaderBottom";

const Header = () => {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
};

export default Header;
