import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";

import "./Header3.scss";

const Header3 = props => (
  <header className={`header3`}>
    <div className="header3__mask">
      <div className="header3__text">
        <div className="header3__panel">
          <div className="header3__panel-subscribe">Subscribe for Update.................</div>
          <a href="#home" className="header3__panel-go">
            <ArrowIcon fill="black" size="1.25em" />
          </a>
        </div>
        <div className="header3__title">APEXA</div>
        <div className="header3__description">
          <span className="header3__description--left">Design to build </span>
          <span className="header3__description--right">World of peace</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header3;
