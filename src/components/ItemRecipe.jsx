import React, { Component } from "react";
import PropTypes from "prop-types";

import ImageIcon from "./ImageIcon";

import "../styles/item-recipe.scss";

export default class ItemRecipe extends Component {
  static get propTypes() { return { item: PropTypes.object.isRequired }; }

  render() {
    const { item } = this.props;

    const recipeComponents = [];
    for (let i = 0; i < item.components.length; i++) {
      const component = item.components[i];
      recipeComponents.push(<ImageIcon key={`${component.name}-${i}`} item={component} selected={false}/>);
      if (i < item.components.length - 1) recipeComponents.push(<div key={i} className="plus">+</div>)
    }

    return (
      <div className="itemRecipe">
        {recipeComponents}
        <div className="equals">=</div>
        <ImageIcon item={item} selected={false}/>
      </div>
    );
  }
}
