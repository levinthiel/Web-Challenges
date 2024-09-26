console.clear();

const form = document.querySelector("[data-js='form']");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0 ) {
          throw new error ("Cannot divide by zero!")
      }
      return a / b; 
    } catch(error) {
    console.log(error  + "Cannot divide by zero!");
    } 
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
