import getRandomColor from "../../utils/randomColor.js";
let randomColor = getRandomColor();

export default function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = randomColor;
  });
    return square;
  }
  