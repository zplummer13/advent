import React from "react";
import "./App.scss";
import xIcon from "./icons/times-circle-solid.svg";
import { House } from "./components/House";
import { Tracker } from "./components/Tracker";
import { useState } from "react";

function App() {
  function hasVisited(): boolean {
    if (window.sessionStorage.getItem("visitedAdvent2021") == null) {
      return false;
    }
    return true;
  }
  function setVisited(): void {
    window.sessionStorage.setItem("visitedAdvent2021", "true");
    setHasVisited(true);
  }
  const [visited, setHasVisited] = useState(hasVisited());
  return (
    <div className="App">
      <header className="App-header">
        <Tracker />
      </header>
      {visited ? null : (
        <div className="popupWrapper" onClick={setVisited}>
          <div className="popup">
            <div className="row">
              <img
                className="exitIcon rotate"
                onClick={setVisited}
                alt="buttonForClosingModal"
                src={xIcon}
              />
            </div>
            <h1>Welcome!</h1>
            <h2>Thank you for a great year</h2>
          </div>
        </div>
      )}
      <House />
    </div>
  );
}

export default App;
