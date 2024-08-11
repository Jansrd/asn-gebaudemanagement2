import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const MobileMenu = ({ onScrollUp }) => {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <ul>
        {routes.map((route) => (
          <li>
            <Link to={route.to} onClick={onScrollUp}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
