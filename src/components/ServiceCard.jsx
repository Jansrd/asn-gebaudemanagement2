import React from "react";
import "../assets/styles/service-card.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, text }) => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="service-card" id="service-card">
      <Link to="/dienstleistungen" onClick={scrollUp}>
        <div className="service-card-top">
          <p>{icon}</p>
        </div>
        <div className="service-card-bottom" id="service-card-bottom">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
