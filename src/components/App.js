import React, { Component } from "react";
import logo from "../logo.svg";
import "../scss/App.scss";
// import FixedHeader from "./FixedHeader";
import SectionTop from "./SectionTop";
import GetInTouch from "./GetInTouch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionTop />
        <GetInTouch />
        {/* <FixedHeader /> */}
      </div>
    );
  }
}

export default App;
