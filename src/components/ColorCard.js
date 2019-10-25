import * as React from "react";
import { TooltipHost } from "office-ui-fabric-react/lib/Tooltip";
import { getId } from "office-ui-fabric-react/lib/Utilities";

import "./ColorCard.css";

export default class ColorCard extends React.Component {
  _hostId = getId("tooltipHost");

  render() {
    return (
      <TooltipHost
        content={this.props.hex}
        id={this._hostId}
        calloutProps={{ gapSpace: 0 }}
        styles={{
          root: { display: "inline-block" }
        }}
        tooltipDelay={0}
      >
        <div className="color-card">
          <div style={{ backgroundColor: this.props.hex }}></div>
          <span className="name">{this.props.name}</span>
          <span className="hex">{this.props.hex}</span>
        </div>
      </TooltipHost>
    );
  }
}
