import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { Button } from "./components/button";
import { CheckBox } from "./components/checkbox";
import MobileMenu from "./components/mobile-menu";
import { SecondButton } from "./components/second-button";
import Toggle from "./components/toggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent />
        <Button />
        <CheckBox />
        <SecondButton label="click me please" className="button-style" />
        <MobileMenu />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
