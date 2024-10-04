import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counterstate, setcounterstate] = useState (0)

/*   function plus(){
    setcounterstate(counterstate + 1)
    console.log (counterstate)
  }
  function minus(){
    setcounterstate(counterstate - 1)
    console.log (counterstate)
  }
 */
  function plusminus (plusorminus) {
   if (plusorminus == "plus"){
    setcounterstate(counterstate + 1)
   }else {
    setcounterstate(counterstate - 1)
   }


  }


  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counterstate} />
      <div className="counter__buttons-container">
        <button onClick={() => plusminus("plus")}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button onClick={() => plusminus("minus")}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
