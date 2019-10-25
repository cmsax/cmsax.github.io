import React from "react";
import "./SimpleCard.css";

export default class SimpleCard extends React.Component {
  render() {
    return (
      <div className="simple-card">
        <span className="title">{this.props.title}</span>
        <span className="desc">{this.props.description}</span>
      </div>
    );
  }
}
