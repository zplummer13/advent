import React from "react";
import "./App.scss";
import { House } from "./components/House";
import { Tracker } from "./components/Tracker";
import { Modal } from "./components/Modal";
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
      {!visited &&
        <Modal
            title="Welcome!"
            content={["Thank you for a great year"]}
            type={["text"]}
            onModalClose={() => setVisited()}
          />
      }
      <House />
    </div>
  );
}

export default App;
