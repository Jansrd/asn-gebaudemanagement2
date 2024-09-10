import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import SocialContactMobileMenu from "../../components/SocialContactMobileMenu";

const MobileMenu = ({ onScrollUp }) => {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <Link to={route.to} onClick={onScrollUp}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile-social">
        <SocialContactMobileMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
