import * as React from "react";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  PrimaryButton,
  DefaultButton
} from "office-ui-fabric-react/lib/Button";
import { ChoiceGroup } from "office-ui-fabric-react/lib/ChoiceGroup";

export default class AuthBox extends React.Component {
  _showDialog = () => {
    this.setState({ hideDialog: false });
  };

  _closeDialog = () => {
    this.setState({ hideDialog: true });
  };

  render() {
    return (
      <div>
        <Dialog
          hidden={this.state.hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: "All emails together",
            subText:
              "Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails."
          }}
          modalProps={{
            isBlocking: false,
            styles: { main: { maxWidth: 450 } }
          }}
        >
          <ChoiceGroup
            options={[
              {
                key: "A",
                text: "Option A"
              },
              {
                key: "B",
                text: "Option B",
                checked: true
              },
              {
                key: "C",
                text: "Option C",
                disabled: true
              }
            ]}
          />
          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
}
