import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

import "./Header1.scss";

const Header1 = props => (
  <header className={`header1`}>
    <div className="header1__mask">
      <div className="header1__text">
        <div className="header1__panel">
          <div className="header1__panel-subscribe">Subscribe for Update..............</div>
          <a href="#home" className="header1__panel-go">
            <ArrowIcon fill="#038336" size="1.25em" />
          </a>
        </div>
        <div className="header1__title">APEXA</div>
        <div className="header1__description">
          <span className="header1__description--left">Design to build </span>
          <span className="header1__description--right">World of peace</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header1;
