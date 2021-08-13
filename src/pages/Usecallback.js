import React, { useState } from "react";

function Usecallback() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log("incremented");
  }
  function decrement() {
    setCount(count - 1);
    console.log("decremented");
  }
  function clearall() {
    setCount(0);
  }

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button>{count}</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <button onClick={clearall}>Clear All</button>
      </div>
    </>
  );
}

export default Usecallback;
