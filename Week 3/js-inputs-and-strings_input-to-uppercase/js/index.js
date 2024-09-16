console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
const inputVal = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');


button.addEventListener("click", () => {

    const thevalue = inputVal.value;
    const upper = thevalue.toUpperCase();

        inputVal.value = upper;

        console.log(thevalue)
        console.log(inputVal)
        console.log(upper)
        console.log(typeof thevalue)
})

