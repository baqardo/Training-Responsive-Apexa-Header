import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

import "./Header2.scss";

const Header2 = props => (
  <header className={`header2`}>
    <div className="header2__content">
      <div className="header2__title">APEXA</div>
      <div className="header2__description">
        <span className="header2__description--left">Design to build </span>
        <span className="header2__description--right">World of peace</span>
      </div>
      <div className="header2__subscription">
        <div className="header2__subscription-text">Designed by JITU RAUT</div>
        <a href="https://dribbble.com/jituraut" target="_blank" className="header2__subscription-btn">
          <ArrowIcon fill="white" size="1.25rem" />
        </a>
      </div>
    </div>
  </header>
);

export default Header2;
