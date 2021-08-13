import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import "../App.css";

function Usestate() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  if (count == 5) {
    console.log("yes is is 5");
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <p>{color}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Usestate;
