import React from "react";
import "../assets/styles/footer.css";
import FooterTop from "./Footer/FooterTop";
import FooterBottom from "./Footer/FooterBottom";

const Footer = () => {
  return (
    <>
      <div className="footer-line"></div>
      <div className="footer">
        <div className="footer-content" id="footer-content">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </>
  );
};

export default Footer;
