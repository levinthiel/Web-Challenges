import React from "react";
import "./styles.css";

export default function App() {
  return < Smiley
              ishappy = {true}
          />
}

function Smiley({ishappy}){
  return (
    <h1>{ishappy ? <span>:D</span> : <span>not happy</span>}</h1>
  )
}
