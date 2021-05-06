import React, { Component } from "react";
import ArrowIcon from "../../components/Icons/ArrowIcon";

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <a href="#home" className={`navigation__burger ${this.props.green ? "navigation__burger--green" : ""}`}>
          <div className="navigation__burger-line"></div>
          <div className="navigation__burger-line navigation__burger-line--short"></div>
          <div className="navigation__burger-line"></div>
        </a>

        <a href="#home" className="navigation__login">
          Login
          <div className="navigation__login-icon">
            <ArrowIcon fill="white" size="0.75rem" />
          </div>
        </a>
      </nav>
    );
  }
}

export default Navigation;
