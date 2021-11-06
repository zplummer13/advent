import React from "react";
import "./App.scss";
import { House } from "./components/House";
import { Tracker } from "./components/Tracker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tracker />
      </header>
      <House />
    </div>
  );
}

export default App;
