import React from "react";
import "../assets/styles/title.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title" id="title">
      <h1 id="section-title">{title}</h1>
      <p id="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default Title;
