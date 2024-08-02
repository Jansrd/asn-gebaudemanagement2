import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-bottom">
      <div className="footer-bottom-content">
        <div className="footer-bottom-top">
          <Link to="/impressum" rel="noreferrer" onClick={scrollUp}>
            Impressum
          </Link>
          <div className="vh"></div>
          <Link to="/datenschutzerklärung" rel="noreferrer" onClick={scrollUp}>
            Datenschutzerklärung
          </Link>
        </div>
        <div className="footer-bottom-bottom">
          <p>Copyright&copy; 2024 ASN Gebäudemanagement.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
