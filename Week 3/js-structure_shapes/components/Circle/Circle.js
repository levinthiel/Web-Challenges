import getRandomColor from "../../utils/randomColor.js";
let randomColor = getRandomColor();

export default function Circle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
    circle.style.backgroundColor = randomColor;
    });
    return circle;
  }
  