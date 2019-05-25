import React, { Component } from "react";
import utils from "../utils";
import "../styles/app.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <img src={utils.imgUrl("logo.svg")} alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
