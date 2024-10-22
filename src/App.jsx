import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./count";
import Users from "./user";
import Friends from "./friends";

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert("Oh! you clicked in the right place");
  };

  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Counter> </Counter>
      <h2>React core concepts</h2>
      {/* normal function */}
      <button onClick={handleClick}>Click Function</button>
      {/* arrow function */}
      <button onClick={handleClick2}>Arrow Function</button>
      {/* inline function */}
      <button
        onClick={() => {
          alert("Function is also in me");
        }}
      >
        Inline Function
      </button>
      {/* function with peramiter */}
      <button onClick={() => addFive(5)}>func with peramiter</button>
    </>
  );
}

export default App;
