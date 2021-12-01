import React from "react";
import "./App.scss";
import { House } from "./components/House";
import { Tracker } from "./components/Tracker";
import { Modal } from "./components/Modal";
import { useState } from "react";
import zurg from "./icons/santazurg.svg";

function App() {
  function hasVisited(): boolean {
    if (localStorage.getItem("visitedAdvent2021") == null) {
      return false;
    }
    return true;
  }
  function setVisited(): void {
    localStorage.setItem("visitedAdvent2021", "true");
    setHasVisited(true);
  }
  const [visited, setHasVisited] = useState(hasVisited());

  return (
    <div className="App">
      <header className="App-header">
        <Tracker />
      </header>
      {!visited && (
        <Modal
          title=""
          content={[
            "Welcome to Zack and Zack's Advent Calendar 2021! \n \n This year, in lieu of Christmas cards, we decided to get a little more interactive and build this little website.Each day of December, a door will unlock and you can check out what is behind the door - whether it be a piece of trivia, playlist, video, puzzle, or other holiday - themed thing.\n \n We couldn't do it alone so shout out to the people who contributed to the calendar: Sarah Carroll, Jim Calabro, Thomas Douglas, and Matt and Brianna Plummer \n \n Happy Holidays! \n Love, Zack, Zack, and Zurg",
            zurg,
          ]}
          type={["text", "smallImage"]}
          onModalClose={() => setVisited()}
        />
      )}
      <House />
    </div>
  );
}

export default App;
