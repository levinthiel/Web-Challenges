import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);


  function handleIncrement() {
    let count2 = count + 1
    let count3 = count2 + 1
    let count4 = count3 + 1
    setCount(count2 );
    setCount(count3);
    setCount(count4);

    console.log(count)
    console.log(count2)
    console.log(count3)

  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
