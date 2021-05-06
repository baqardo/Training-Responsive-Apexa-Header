import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

import "./Header2.scss";

const Header2 = props => (
  <header className={`header2 ${props.direction === "next" ? "header2--next" : "header2--prev"}`}>
    <div className="header2__content">
      <div className="header2__title">APEXA</div>
      <div className="header2__description">
        <span className="header2__description--left">Design to build </span>
        <span className="header2__description--right">World of peace</span>
      </div>
      <div className="header2__subscription">
        <div className="header2__subscription-text">Subscribe for Update.................</div>
        <a href="#home" className="header2__subscription-btn">
          <ArrowIcon fill="white" size="1.25rem" />
        </a>
      </div>
    </div>
  </header>
);

export default Header2;
