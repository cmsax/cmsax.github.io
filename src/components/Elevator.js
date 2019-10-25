import React from "react";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import "./Elevator.css";

export default class Elevator extends React.Component {
  render() {
    return (
      <div>
        <a href="#root">
          <div className="elevator">
            <FontIcon iconName="Up" />
          </div>
        </a>
      </div>
    );
  }
}
