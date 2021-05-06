import React, { Component } from "react";

import "./Dots.scss";

class Dots extends Component {
  style = "";

  render() {
    if (this.props.position === 1 || this.props.position === 2) this.style = "";
    if (this.props.position === 3) this.style = "dots--dark";
    if (this.props.position === 4) this.style = "dots--black";

    return (
      <div className={`dots ${this.style}`}>
        <button
          onClick={() => this.props.click(1)}
          className={`dots__item ${this.props.position === 1 ? "dots__item--active" : ""}`}></button>
        <button
          onClick={() => this.props.click(2)}
          className={`dots__item ${this.props.position === 2 ? "dots__item--active" : ""}`}></button>
        <button
          onClick={() => this.props.click(3)}
          className={`dots__item ${this.props.position === 3 ? "dots__item--active" : ""}`}></button>
        <button
          onClick={() => this.props.click(4)}
          className={`dots__item ${this.props.position === 4 ? "dots__item--active" : ""}`}></button>
      </div>
    );
  }
}

export default Dots;
