import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>test</Button>
      <Button>test</Button>
      <Button>test</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
