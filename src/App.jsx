import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./views/About";
import Nav from "./components/Nav";
import Rerolls from "./views/Rerolls";
import routes from "./utils/routes";
import "./styles/main.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Route path={routes.about} exact component={About}/>
        <Route path={routes.rerolls} component={Rerolls}/>
      </Router>
    );
  }
}
