import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../utils/routes";
import "../styles/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to={routes.about}>About</Link>
        <Link to={routes.rerolls}>Reroll Calculator</Link>
      </nav>
    );
  }
}
