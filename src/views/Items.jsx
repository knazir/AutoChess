import React, { Component } from "react";

import ImageIcon from "../components/ImageIcon";
import ItemRecipe from "../components/ItemRecipe";

import items from "../data/items";

import "../styles/items.scss";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: new Set()
    };
  }

  render() {
    return (
      <div className="items view">
        <h1>Items</h1>
        {this._itemSelect()}
        <h1>Combinations</h1>
        {this._availableItems()}
      </div>
    );
  }

  _itemSelect() {
    const selectableItems = items.filter(i => !i.components).map(i => {
      return <ImageIcon key={i.name} item={i} onClick={this._onItemClick.bind(this)}/>;
    });
    return (
      <div className="itemSelect">
        {selectableItems}
      </div>
    );
  }

  _availableItems() {
    const { selectedItems } = this.state;
    const advancedItems = items.filter(i => i.components);
    const possibleItems = [];
    for (let item of advancedItems) {
      const componentsRemaining = [...item.components];
      for (let selectedItem of selectedItems) {
        let selectedIndex = componentsRemaining.indexOf(selectedItem);
        // remove all of this selected item from components list
        while (selectedIndex !== -1) {
          if (selectedIndex !== -1) componentsRemaining.splice(selectedIndex, 1);
          selectedIndex = componentsRemaining.indexOf(selectedItem);
        }
      }
      if (componentsRemaining.length === 0) possibleItems.push(item);
    }
    const possibleRecipes = possibleItems.map(i => {
      return <ItemRecipe key={i.name} item={i}/>;
    });

    return (
      <div className="availableItems">
        {possibleRecipes}
      </div>
    );
  }

  _onItemClick(item, selected) {
    const { selectedItems } = this.state;
    if (selected) selectedItems.add(item);
    else selectedItems.delete(item);
    this.forceUpdate();
  }
}
