console.clear();
const pixelValues = [
  [
    "#abcccc",
    "#9bb9b7",
    "#b8c7c9",
    "#a5c5c5",
    "#a8c9c9",
    "#99b9c2",
    "#9bb9b7",
    "#9bb9b7",
    "#92afb9",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#91a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#91b9b4",
    "#8eb99b",
    "#9bb9b7",
    "#9bb9b7",
    "#89b9a9",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b6",
    "#9bb9b7",
    "#9bb9b7",
    "#ec7f5a",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#ec6a3e",
    "#9bb9b7",
    "#e05334",
    "#ec4811",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#ed4913",
    "#160601",
    "#ec4811",
    "#fe4d13",
    "#ec4811",
    "#ec4811",
    "#ec7e53",
    "#9bb9b7",
    "#94abb9",
  ],
  [
    "#9bb9b7",
    "#ec590b",
    "#ec4812",
    "#d34010",
    "#ec4811",
    "#ec4811",
    "#ec4811",
    "#ec815b",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#ec4811",
    "#ec4811",
    "#b8370d",
    "#9bb9b7",
    "#f7723e",
    "#ec4811",
    "#9bb4c0",
    "#9bb9b7",
  ],
  [
    "#96a8b9",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#98b9a1",
    "#9bb9b7",
    "#ec7745",
    "#9bb9b7",
    "#9bb9b7",
  ],
  [
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#91b99c",
    "#9bb9b7",
    "#95b2b2",
    "#9bb9b7",
    "#9bb9b7",
    "#9bb9b7",
    "#9aacb9",
  ],
  [
    "#9bb9b7",
    "#87b0b6",
    "#9bb9b7",
    "#9bb9b7",
    "#92afaf",
    "#8aa5a5",
    "#859f9f",
    "#8eaaaa",
    "#a2b9a7",
    "#9bb9b7",
  ],
];


/* const canvas = document.querySelector('[data-js="canvas"]');
let numberofarrays = pixelValues.length;


for (let numberofarrays = 0; numberofarrays <= 10; numberofarrays++) {

  console.log(numberofarrays);
  let numberofsubarrays = numberofarrays.length;  

  
      for (let numberofsubarrays = 0; numberofsubarrays <= 10; numberofsubarrays++) {

        console.log(numberofsubarrays);
        
        const bgcolor = pixelValues[numberofarrays][numberofsubarrays];

        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("style",`background-color:${bgcolor};`);
        canvas.append(pixel)

      }


}
  */

const canvas = document.querySelector('[data-js="canvas"]');
const numberofarrays = pixelValues.length; // Total number of rows

for (let i = 0; i < numberofarrays; i++) {
  const subarrayLength = pixelValues[i].length; // Length of each row

  for (let j = 0; j < subarrayLength; j++) {
    const bgcolor = pixelValues[i][j];

    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", `background-color:${bgcolor};`);
    canvas.append(pixel);
  }
}
 






