import React, { useState } from "react";
import "./styles.css";

export default function App() {
 //let count = 0;
  const[count, setCount] = useState(0);

  function handleCounterPlus() {
    setCount(count +1);
    console.log("🤔 +++");
  }
  function handleCounterMinus() {
    setCount(count -1);
    console.log("🤔 ---");
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={handleCounterMinus} 
        >
          -
        </button>
        <button
          type="button"
          onClick={handleCounterPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
