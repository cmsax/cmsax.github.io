import * as React from "react";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import {
  DefaultButton,
  PrimaryButton
} from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Link, MessageBar, MessageBarType } from "office-ui-fabric-react";
import DarkThemeContext from "../context";

export default class AuthBox extends React.Component {
  static contextType = DarkThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      showMsg: false,
      msgContent: {
        [true]: {
          msg: "Authentication complete!",
          type: MessageBarType.success
        },
        [false]: {
          msg: (
            <div>
              Invalid authentication token! You might need to contact me for a
              valid code.
              <Link href="mailto:i@unoiou.com" target="_blank">
                Email me.
              </Link>
            </div>
          ),
          type: MessageBarType.error
        }
      }
    };
  }
  setToken = (e, newValue) => {
    this.setState({
      token: newValue || ""
    });
  };
  onConfirm = () => {
    this.props.onConfirm(this.state.token);
    this.showMsg();
  };
  onCloseMsg = () => {
    this.setState({
      showMsg: false
    });
  };
  showMsg = () => {
    this.setState({
      showMsg: true
    });
    setTimeout(() => {
      this.setState({ showMsg: false });
    }, 2000);
  };
  onCancelButton = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        {this.state.showMsg ? (
          <MessageBar
            messageBarType={this.state.msgContent[this.props.valid].type}
            isMultiline={false}
            onDismiss={this.onCloseMsg}
            dismissButtonAriaLabel="Close"
          >
            {this.state.msgContent[this.props.valid].msg}
          </MessageBar>
        ) : (
          ""
        )}

        <Dialog
          className={this.context ? "theme-dark" : "theme-light"}
          hidden={this.props.hidden}
          onDismiss={this.props.onCloseDialogue}
          dialogContentProps={{
            type: DialogType.largeHeader,
            title: "Authentication required",
            subText:
              "Please input the code I gave you moments ago, it's a password."
          }}
          modalProps={{
            isBlocking: true,
            styles: { main: { maxWidth: 450 } }
          }}
        >
          <TextField
            label="Authentication Code "
            required
            value={this.state.token}
            onChange={this.setToken}
            type="password"
          />
          <DialogFooter>
            <DefaultButton onClick={this.onCancelButton} text="Cancel" />
            <PrimaryButton onClick={this.onConfirm} text="Confirm" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
}
