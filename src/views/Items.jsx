import React, { Component } from "react";

import ImageIcon from "../components/ImageIcon";
import ItemRecipe from "../components/ItemRecipe";

import items from "../data/items";

import "../styles/items.scss";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this._onItemClick = this._onItemClick.bind(this);
    this.state = {
      selectedItems: new Set(),
      doubledItems: new Set()
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
    const { selectedItems, doubledItems } = this.state;
    const selectableItems = items.filter(i => !i.components).map(i => {
      const selected = selectedItems.has(i);
      const checked = doubledItems.has(i);
      return (
        <div key={i.name} className="item">
          <ImageIcon item={i} selected={selected} onClick={this._onItemClick}/>
          <span><input type="checkbox" checked={checked} onChange={e => this._onDouble(i, e.target.checked)}/>2+</span>
        </div>
      );
    });
    return (
      <div className="itemSelect">
        {selectableItems}
      </div>
    );
  }

  _availableItems() {
    const { selectedItems, doubledItems } = this.state;
    const advancedItems = items.filter(i => i.components);
    const possibleItems = [];
    for (let item of advancedItems) {
      const componentsRemaining = [...item.components];
      for (let selectedItem of selectedItems) {
        let selectedIndex = componentsRemaining.indexOf(selectedItem);
        if (selectedIndex !== -1) componentsRemaining.splice(selectedIndex, 1);

        // consider doubled items
        if (doubledItems.has(selectedItem)) {
          selectedIndex = componentsRemaining.indexOf(selectedItem);
          if (selectedIndex !== -1) componentsRemaining.splice(selectedIndex, 1);
        }
      }
      console.log(componentsRemaining);
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

  _onDouble(item, selected) {
    const { selectedItems, doubledItems } = this.state;
    if (selected) {
      doubledItems.add(item);
      if (!selectedItems.has(item)) selectedItems.add(item);
    } else {
      doubledItems.delete(item);
    }
    this.forceUpdate();
  }
}
