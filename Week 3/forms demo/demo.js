// 1) select form 
const form = document.querySelector('[data-js="form"]');
// 2) add event listener to form (SUBMIT EVENT)
form.addEventListener('submit', (event) => {
    // Prevent the form from submitting the usual way (default behavior)
    event.preventDefault();
    // Your custom form submission logic here
    // console.log(event.target.elements.firstName.value);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // form.reset();
    event.target.reset();
    console.log(data);
});
// 3) prevent default behavior of form submission