import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [validCode, setValidCode] = useState("🐡🐠🐋");
  const [code, setCode] = useState("");

  function handleClick(emoji) {
    
    setCode((prevCode) => {
      const newCode = prevCode + emoji; 
      console.log("Updated Code: ", newCode); 
      return newCode;
    });
    setValidCode(validCode + {code})
    console.log("valid Code: ",setValidCode)
    return setValidCode
    /* console.log(emoji);
    console.log(code);*/
    
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => { handleClick("🐡"); }} >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => { handleClick("🐋"); }} >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => { handleClick("🐠"); }} >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={() => { console.log("Reset Code!");}} >
        Reset
      </button>

       {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
