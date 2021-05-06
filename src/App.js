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
  }

  state = { position: 1, direction: null };

  componentDidMount() {
    window.addEventListener("wheel", this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState.position, this.state.position);
    if (nextState.position === this.state.position) return false;
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.handleScroll);
  }

  handleScroll = event => {
    if (event.deltaY < 0) {
      if (this.state.position > 1) {
        this.changePosition(this.state.position - 1);
      }
    }
    if (event.deltaY > 0) {
      if (this.state.position < 4) {
        this.changePosition(this.state.position + 1);
      }
    }
  };

  changePosition = position => {
    if (!this.animationEnd) return;
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
          render={({ location }) => (
            <SwitchTransition mode={"in-out"}>
              <CSSTransition
                nodeRef={this.nodeRef}
                key={location.key}
                timeout={1000}
                classNames="slideLeft"
                exit={false}>
                <div ref={this.nodeRef}>
                  <Switch location={location}>
                    <Route exact path="/header2">
                      <Header2 direction={this.state.direction} />
                    </Route>
                    <Route exact path="/header3">
                      <Header3 direction={this.state.direction} />
                    </Route>
                    <Route exact path="/header4">
                      <Header4 direction={this.state.direction} />
                    </Route>
                    <Route path="/">
                      <Header1 direction={this.state.direction} />
                    </Route>
                  </Switch>
                </div>
              </CSSTransition>
            </SwitchTransition>
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
