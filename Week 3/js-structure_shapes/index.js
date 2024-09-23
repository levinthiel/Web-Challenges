import Circle from "./components/Circle/Circle.js"
import Pentagon from "./components/Pentagon/Pentagon.js"
import Square from "./components/Square/Square.js"

console.clear();




const root = document.getElementById("root");

const circleElement = Circle();
root.append(circleElement);

const squareElement = Square();
root.append(squareElement);

const pentagonElement = Pentagon();
root.append(pentagonElement);

