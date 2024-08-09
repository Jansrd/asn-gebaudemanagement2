import React from "react";
import "../assets/styles/service-icon.css";

const ServiceIcon = ({
  icon,
  title,
  text,
  contactText,
  contactText2,
  color,
}) => {
  return (
    <div className="service-icon">
      <div className="service-icon-top">
        <p>{icon}</p>
      </div>
      <div className="service-icon-bottom" id="service-icon-bottom">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="service-icon-bottom-text" id="service-icon-bottom-text">
          <h3>{contactText}</h3>
          <h5 style={{ color: color }}>{contactText2}</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceIcon;
