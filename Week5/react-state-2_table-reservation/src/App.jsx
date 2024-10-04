import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
  import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handlePeople(plusorminus) {
    if (plusorminus == "plus"){
      setPeople(people + 1)
    }else {
      setPeople(people - 1)
    }
 
    console.log(people)
   }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onUpdatePeople={handlePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
