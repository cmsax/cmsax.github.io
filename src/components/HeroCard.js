import React from "react";

export default class HeroCard extends React.Component {
  render() {
    return (
      <div
        className="hero-card"
        style={{ height: "200px", display: "block", margin: "0 20px 20px 0" }}
      >
        <img
          src={this.props.imgSrc}
          alt={this.props.name}
          style={{ height: "100%" }}
        />
      </div>
    );
  }
}
