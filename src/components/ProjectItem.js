import * as React from "react";
import { CompoundButton, Stack } from "office-ui-fabric-react";
import "./ProjectItem.css";

// Example formatting
// const stackTokens = { childrenGap: 40 };

export default class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project-item">
        <Stack>
          <CompoundButton
            secondaryText={this.props.description}
            disabled={this.props.disabled}
            checked={this.props.checked}
          >
            {this.props.title}
          </CompoundButton>
        </Stack>
      </div>
    );
  }
}
