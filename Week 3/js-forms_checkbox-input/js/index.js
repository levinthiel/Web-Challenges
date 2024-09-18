console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.classList.add("hidden");
}

hideTosError();


function showTosError() {
  tosError.classList.remove("hidden");
}


const showTosSuccess = () => {
  tosError.classList.remove("hidden");
  tosError.innerHTML = "you did it!";
  tosError.classList.add("success")
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tosCheckboxstate = tosCheckbox.checked;
  console.log(tosCheckboxstate);

  if (tosCheckboxstate == true) {

    console.log("test" + tosCheckboxstate);
    showTosSuccess();
    alert("Form submitted");
    

  } else {

    showTosError();

  }

  // eslint-disable-next-line no-alert
  
});
