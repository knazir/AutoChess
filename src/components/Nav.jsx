import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../utils/routes";
import "../styles/nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        {this._makeLink("About", routes.about)}
        {this._makeLink("Items", routes.items)}
      </nav>
    );
  }

  _makeLink(title, route) {
    return <Link to={route} className={this._getClassName(route)} onClick={() => this.forceUpdate()}>{title}</Link>;
  }

  _getClassName(route) {
    return window.location.pathname.endsWith(route) ? "selected" : null;
  }
}
