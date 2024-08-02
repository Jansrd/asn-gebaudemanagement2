import React from "react";
import { Link } from "react-router-dom";

const FooterServices = ({ title, onScroll }) => {
  return (
    <div className="footer-services">
      <li onClick={onScroll}>
        <Link to="/dienstleistungen">{title}</Link>
      </li>
    </div>
  );
};

export default FooterServices;
