import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  let player = "X";

  function changePlayer() {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    console.log("hey");
  }

  function displayMove() {
    setValue(player);
  }

  return (
    <>
      <div id="board">
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
        <div className="box" onClick={displayMove}>
          {value}
        </div>
      </div>
      <p id="turnMessage">It's {player}'s turn</p>
    </>
  );
}

export default App;
