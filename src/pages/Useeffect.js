import React, { useState, useEffect } from "react";
import "../App.css";

function Useeffect() {
  useEffect(() => {
    console.log("this is useeffect");
  });
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function clearall() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={click}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={clearall}>Clear All</button>
    </div>
  );
}

export default Useeffect;
