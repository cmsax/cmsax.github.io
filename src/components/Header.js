import * as React from "react";

export default class Header extends React.Component {
  render() {
    return <h3>{this.props.title}</h3>;
  }
}
