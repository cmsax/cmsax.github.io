import * as React from "react";
import "./MainContainer.css";

export default class MainContainer extends React.Component {
  render() {
    return <main className="main-container">{this.props.children}</main>;
  }
}
