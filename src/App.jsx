import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombination = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  function checkWinner(newBoard) {
    for (let combination of winningCombination) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    setWinner(checkWinner(newBoard));

    setPlayer(player === "X" ? "O" : "X");
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  }

  return (
    <>
      <h1 id="title">Tic Tac Toe</h1>
      <p id="madeByMessage">Made by: Eduardo Lulo</p>
      <div id="board">
        {board.map((value, index) => (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
      <p id="turnMessage">
        {winner ? `${winner} wins! 🎉` : `It's ${player}'s turn`}
      </p>
      <button id="resetButton" onClick={() => resetGame()}>
        Reset game
      </button>
    </>
  );
}

export default App;
