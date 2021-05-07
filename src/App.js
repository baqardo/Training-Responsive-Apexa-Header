import "./App.scss";

import Navigation from "./containers/Navigation/Navigation";
import Dots from "./containers/Dots/Dots";
import Header1 from "./components/Header1/Header1";
import Header2 from "./components/Header2/Header2";
import Header3 from "./components/Header3/Header3";
import Header4 from "./components/Header4/Header4";

import React, { Component } from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);

    this.animationEnd = true;
    this.startTouchPos = null;
  }

  state = { position: 1, direction: null };

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchend", this.handleTouchEnd);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.position === this.state.position) return false;
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchend", this.handleTouchEnd);
  }

  handleTouchStart = event => {
    this.startTouchPos = event.touches[0].clientX;
  };

  handleTouchEnd = event => {
    let endTouchPos = event.changedTouches[0].clientX;

    let diffTouchPos = Math.abs(this.startTouchPos - endTouchPos);

    if (this.startTouchPos > endTouchPos && diffTouchPos > 20) {
      this.changePosition(this.state.position + 1);
    }

    if (this.startTouchPos < endTouchPos && diffTouchPos > 20) {
      this.changePosition(this.state.position - 1);
    }
  };

  handleScroll = event => {
    if (event.deltaY < 0) {
      this.changePosition(this.state.position - 1);
    }
    if (event.deltaY > 0) {
      this.changePosition(this.state.position + 1);
    }
  };

  changePosition = position => {
    if (!this.animationEnd) return;

    if (position < 1 || position > 4) return;

    let direction = null;
    if (position === this.state.position) return;
    if (position > this.state.position) direction = "next";
    if (position < this.state.position) direction = "prev";
    this.animationEnd = false;
    this.setState({ position, direction });
    this.props.history.push({ pathname: `header${position}` });
    setTimeout(() => {
      this.animationEnd = true;
    }, 1000);
  };

  render() {
    this.nodeRef = React.createRef();
    return (
      <div className="app">
        <Navigation green={this.state.position === 1 ? true : false} />
        <Dots position={this.state.position} click={this.changePosition} />

        <Route
          render={({ location }) => {
            return (
              <SwitchTransition mode={"in-out"}>
                <CSSTransition
                  nodeRef={this.nodeRef}
                  key={location.pathname}
                  timeout={1000}
                  classNames={`${this.state.direction === "next" ? "slideLeft" : "slideRight"}`}
                  exit={false}>
                  <div ref={this.nodeRef}>
                    <Switch location={location}>
                      <Route exact path="/header2">
                        <Header2 />
                      </Route>
                      <Route exact path="/header3">
                        <Header3 />
                      </Route>
                      <Route exact path="/header4">
                        <Header4 />
                      </Route>
                      <Route path="/">
                        <Header1 />
                      </Route>
                    </Switch>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            );
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
