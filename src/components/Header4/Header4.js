import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import Decorations from "../Decorations/Decorations";

import "./Header4.scss";

const Header4 = props => (
  <header className={`header4`}>
    <div className="header4__mask">
      <div className="header4__text">
        <div className="header4__panel">
          <div className="header4__panel-subscribe">Subscribe for Update.................</div>
          <a href="#home" className="header4__panel-go">
            <ArrowIcon fill="#c2c2c2" size="1.25rem" />
          </a>
          <div className="header4__panel-decoration"></div>
        </div>
        <div className="header4__title">APEXA</div>
        <div className="header4__description">Design to build World of peace</div>
        <div className="header4__decorations">
          <Decorations size="69em" />
        </div>
      </div>
    </div>
  </header>
);

export default Header4;
