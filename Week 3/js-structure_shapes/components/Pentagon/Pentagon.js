import getRandomColor from "../../utils/randomColor.js";
let randomColor = getRandomColor();

export default function Pentagon() {
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
      pentagon.style.backgroundColor = randomColor;
    });
    return pentagon;
  }
  