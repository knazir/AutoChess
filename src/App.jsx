import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import routes from "./utils/routes";

/* Views */
import About from "./views/About";
import Items from "./views/Items";

import "./styles/main.scss";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Route path={routes.about} exact component={About}/>
        <Route path={routes.items} component={Items}/>
      </Router>
    );
  }
}
