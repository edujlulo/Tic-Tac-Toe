import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const body = document.getElementById("body");
  const title = document.getElementById("title");

  function changeBackgroundColor() {
    if (body.style.backgroundColor === "green") {
      body.style.backgroundColor = "blue";
    } else if (body.style.backgroundColor === "blue") {
      body.style.backgroundColor = "red";
    } else {
      body.style.backgroundColor = "green";
    }
    title.textContent = "Hello world";
  }

  return (
    <>
      <div id="body">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 id="title">Vite + React</h1>
        <div className="card">
          <button onClick={() => changeBackgroundColor()}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
