import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active)
    // Check that the value changes correctly.
    console.log(active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={toggleActive}>Activate</button>
    </main>
  );
}
