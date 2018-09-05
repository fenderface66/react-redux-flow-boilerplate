// @flow

import React, { Component } from "react";
import type { Dispatch } from "redux";
import { connect } from "react-redux";
import logo from "../../logo.svg";
import { type Props } from "./types";
import { initiateApp } from "./actions";
import "./App.css";

class App extends Component<Props> {
  componentDidMount() {
    this.props.initiateApp();
  }
  renderAppInitiatedText() {
    if (this.props.appInitiated) {
      return `<h2>APP INTITIATED</h2>`;
    }
    return null;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderAppInitiatedText()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appInitiated: state.app.appInitiated,
});

const mapDispatchToProps = (dispatch: Dispatch<*>):Object => ({
  initiateApp: () => dispatch(initiateApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
