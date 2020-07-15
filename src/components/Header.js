import * as React from "react";
import { Persona, PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import "./Header.css";
import DarkThemeContext from "../context";

const examplePersona = {
  imageUrl: "https://unoiou.com/resume/avatar.png",
  // "https://tvax3.sinaimg.cn/crop.0.0.896.896.180/006GeoFdly8g81krdqstyj30ow0owgns.jpg"
};

export default class Header extends React.Component {
  static contextType = DarkThemeContext;
  render() {
    return (
      <div>
        <div className={"avatar"}>
          <Persona
            {...examplePersona}
            size={PersonaSize.size100}
            hidePersonaDetails
          />
          <div
            className={
              "theme-control " + (this.context ? "theme-dark" : "theme-light")
            }
            onClick={this.props.handleToggleTheme}
          >
            <FontIcon iconName={this.context ? "ClearNight" : "Sunny"} />
          </div>
        </div>
      </div>
    );
  }
}
