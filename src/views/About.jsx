import React, { Component } from "react";
import utils from "../utils/helpers";
import "../styles/about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about view">
        <img className="autoChessLogo" src={utils.imgUrl("auto_chess.jpg")} alt="AutoChess Logo"/>
        <p>
          Hi, <a href="https://www.github.com/knazir" target="_blank" rel="noopener noreferrer">I'm</a> really bad
          at AutoChess, but I think it's really fun. I started working on some tools to help me make better decisions
          while playing. I hope that you may find them useful as well.
        </p>
        <p>
          You can find the source for these tools and submit bugs
          on <a href="https://www.github.com/knazir/AutoChess" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <p>
          I did not make AutoChess. All images and information on this site are copyright their respective
          owners.
        </p>
      </div>
    );
  }
}
