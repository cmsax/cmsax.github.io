import React from "react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

initializeIcons(/* optional base url */);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="UNOIOU" />
        <Navbar />
      </div>
    );
  }
}

export default App;
