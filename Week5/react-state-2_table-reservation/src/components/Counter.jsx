

export default function Counter({onUpdatePeople}) {


  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => onUpdatePeople("plus")}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => onUpdatePeople("minus")}
        >
          -
        </button>
      </div>
    </>
  );
}
