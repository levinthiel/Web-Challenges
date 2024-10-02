import React from "react";
import "./styles.css";

export default function App() {
  return <Butonzzz
            text="furz"
            disabled={false}
            color="hotpink"
            onKlick={handleClick} 
          />
}

function Butonzzz ({color, disabled, text, onKlick}) {
  return (
    <button 
    disabled={disabled} 
    style={{background:color}}
    onClick={onKlick}
    >
      {text}
    </button>
  )
}

function handleClick(){
  console.log("boooyahhh")
}