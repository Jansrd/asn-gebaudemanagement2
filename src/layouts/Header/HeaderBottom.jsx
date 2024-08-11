import React, { useState } from "react";
import asn_logo from "../../assets/images/asn_logo.png";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export default function HeaderBottom() {
  const [headerHeight, setHeaderHeight] = useState(false);
  const [logoVisibility, setLogoVisibility] = useState("visible");
  const [clicked, setClicked] = useState(false);

  function onScroll() {
    if (window.scrollY > 0) {
      setHeaderHeight(true);
      setLogoVisibility((logoVisibility) => (logoVisibility = "hidden"));
    } else {
      setHeaderHeight(false);
      setLogoVisibility((logoVisibility) => (logoVisibility = "visible"));
    }
  }

  window.addEventListener("scroll", onScroll);

  function handleClick() {
    setClicked(!clicked);
  }

  const scrollUp = () => {
    window.scrollTo(0, 0);
    setClicked(!clicked);
  };

  return (
    <div className="header-bottom" id="header-bottom">
      <div
        style={{ transitionDuration: "0.2s" }}
        className={
          headerHeight
            ? "header-bottom-content-on-scroll"
            : "header-bottom-content"
        }
        id="header-bottom-content"
      >
        <img
          src={asn_logo}
          alt="asn header"
          style={{ visibility: logoVisibility }}
        />
        <Navigation />
        {clicked ? <MobileMenu onScrollUp={scrollUp} /> : null}

        {!clicked ? (
          <GiHamburgerMenu
            className="mobile-menu-show"
            id="mobile-menu-show"
            onClick={handleClick}
          />
        ) : (
          <IoCloseSharp
            className="mobile-menu-exit"
            id="mobile-menu-exit"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
