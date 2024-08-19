import React from "react";
import "../assets/styles/page-not-found.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-content" id="page-not-found-content">
        <div
          className="page-not-found-content-top"
          id="page-not-found-content-top"
        >
          <h1>Ooops...</h1>
          <h3>Das ist nicht das, wonach Sie suchen.</h3>
          <p>Keine Sorge, der folgende Link führt Sie weiter</p>
        </div>
        <div className="page-not-found-content-bottom">
          <Link to="/">
            <button>Startseite</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
