import * as React from "react";
import { CompoundButton, Stack } from "office-ui-fabric-react";

import "./ProjectItem.css";

export default class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project-item" key={this.props.key}>
        <Stack>
          <CompoundButton
            primary
            secondaryText={this.props.description}
            disabled={this.props.disabled}
            checked={this.props.checked}
            onClick={this.props.onProjectClick}
            iconProps={
              this.props.requireAuth
                ? { iconName: this.props.token !== true ? "Lock" : "UnLock" }
                : {}
            }
          >
            {this.props.title}
          </CompoundButton>
        </Stack>
      </div>
    );
  }
}
