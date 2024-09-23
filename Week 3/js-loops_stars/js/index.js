console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let numberofstars = 0; numberofstars <= 4; numberofstars++) {
    

    const stars = document.createElement("img");

    if (numberofstars < filledStars){
      console.log(numberofstars);
      stars.setAttribute("src", "./assets/star-filled.svg");
    }else {
      stars.setAttribute("src", "./assets/star-empty.svg");
    }

    stars.addEventListener("click", () => {
      renderStars(numberofstars+1);
    });

    starContainer.append(stars);


  }
  //--^-- your code here --^--
}

renderStars(0);
