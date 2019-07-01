import React, { Component } from "react";
import PropTypes from "prop-types";

import utils from "../utils/helpers";

import "../styles/image-icon.scss";

export default class ImageIcon extends Component {
  static get propTypes() {
    return {
      item: PropTypes.object.isRequired,
      onClick: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      hovering: false
    };
  }

  render() {
    const { item } = this.props;
    const { selected, hovering } = this.state;
    const src = utils.imgUrl(`items/${item.image}`);
    const effects = item.effects.map((e, i) => <div key={i} className="effect">{e}</div>);
    return (
      <div className={`imageIcon ${this.props.onClick ? "clickable" : ""}`}>
        <img className={selected ? "selected" : null} src={src} alt={item.name} onClick={this._onClick.bind(this)}
             onMouseEnter={this._onMouseEnter.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)}/>
        {
          hovering &&
          <div className="tooltip">
            <h3>{item.name}</h3>
            {effects}
          </div>
        }
      </div>
    );
  }

  _onClick() {
    const { item } = this.props;
    const willSelect = !this.state.selected;
    this.setState({ selected: !this.state.selected }, () => {
      if (this.props.onClick) this.props.onClick(item, willSelect);
    });
  }

  _onMouseEnter() {
    this.setState({ hovering: true });
  }

  _onMouseLeave() {
    this.setState({ hovering: false });
  }
}
