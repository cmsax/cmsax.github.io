import React from "react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Elevator from "./components/Elevator";
import DarkThemeContext from "./context";
import "./App.css";

initializeIcons(/* optional base url */);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeDark: false
    };
  }
  handleToggleTheme = () => {
    document.body.style.backgroundColor = this.state.themeDark
      ? "white"
      : "black";
    this.setState({
      themeDark: !this.state.themeDark
    });
    console.log("toggled.");
  };
  render() {
    return (
      <DarkThemeContext.Provider value={this.state.themeDark}>
        <div
          className={
            "App " + (this.state.themeDark ? "theme-dark" : "theme-light")
          }
        >
          <div id="top"></div>
          <Header title="UNOIOU" handleToggleTheme={this.handleToggleTheme} />
          <Navbar />
          <Footer />
          <Elevator />
        </div>
      </DarkThemeContext.Provider>
    );
  }
}

export default App;
