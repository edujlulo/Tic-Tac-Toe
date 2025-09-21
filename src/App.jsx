import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  return (
    <>
      <div id="board">
        {board.map((value, index) => (
          <div key={index} className="box">
            {value}
          </div>
        ))}
      </div>
      <p id="turnMessage">It's {player}'s turn</p>
    </>
  );
}

export default App;
