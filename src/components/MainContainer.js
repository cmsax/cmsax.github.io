import * as React from "react";
import "./MainContainer.css";

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className="main-container-wrapper">
        <div
          className="main-container"
          style={{
            maxWidth: this.props.maxWidth ? this.props.maxWidth + "px" : "none"
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
