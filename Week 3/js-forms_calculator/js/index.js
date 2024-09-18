console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

const numberA = document.getElementById("number-a");
const numberB = document.getElementById("number-b");

const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  
  const numberAvalue = +numberA.value;
  const numberBvalue = +numberB.value;

  console.log(numberAvalue);
  console.log(numberBvalue);
  
  // --v-- write your code here --v--
  if (addition.checked == true) {

    result = add(numberAvalue, numberBvalue);
    console.log(result);

  } else if (subtraction.checked == true) {

    result = subtract(numberAvalue, numberBvalue);
    console.log(result);

  }
  else if (multiplication.checked == true) {

    result = multiply(numberAvalue, numberBvalue);
    console.log(result);
   

  }
  else if (division.checked == true) {

    result = divide(numberAvalue, numberBvalue);
    console.log(result);

  } else {
    console.log("nothings happens");
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
