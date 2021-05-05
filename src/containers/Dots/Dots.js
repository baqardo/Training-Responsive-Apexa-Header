import React, { Component } from "react";

import "./Dots.scss";

class Dots extends Component {
  render() {
    return (
      <div className="dots dots--black">
        <a href="#home" className="dots__item dots__item--active"></a>
        <a href="#home" className="dots__item"></a>
        <a href="#home" className="dots__item"></a>
        <a href="#home" className="dots__item"></a>
      </div>
    );
  }
}

export default Dots;
