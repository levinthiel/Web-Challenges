import React from "react";
import "./styles.css";

export default function App() {
  return <Sum
            num1={5}
            num2={2}
          />
}

function Sum({num1, num2 }){
  return(
    <h1>{num1} + {num2} = {num1 + num2}</h1>
  )
}
