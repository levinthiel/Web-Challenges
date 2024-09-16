console.clear();

const bodyElement = document.querySelector("[data-js='body']");

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", ()=>{
    bodyElement.classList.add("dark")
    console.log("dark mode activated")
});

lightModeButton.addEventListener("click", ()=>{
    bodyElement.classList.remove("dark")
    console.log("light mode activated")
});

toggleButton.addEventListener("click", ()=>{
    bodyElement.classList.toggle("dark")
    console.log("togglin' mode activated")
});
