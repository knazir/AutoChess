import React, { Component } from "react";

import github from "../data/github.json";

import "../styles/about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about view">
        <p>
          Hi, <a href={github.profile} target="_blank" rel="noopener noreferrer">I'm</a> really bad at Team Fight
          Tactics, but I think it's pretty fun. I started working on some tools to help me make better decisions while
          playing. I hope that you may find them useful as well.
        </p>
        <p>
          You can find the source for these tools and submit bugs
          on <a href={github.repo} target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <p>
          I did not make Teamfight Tactics. All images and information on this site are copyright Riot Games and
          its respective owners.
        </p>
      </div>
    );
  }
}
