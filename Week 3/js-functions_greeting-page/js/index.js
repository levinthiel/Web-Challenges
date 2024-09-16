console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="greetingHTML"]');
const currentHour = new Date().getHours();
const currentDay = new Date().getDay();

function getGreeting() {
  if (currentHour > 6 && currentHour < 12) {
    display.innerHTML='Good morning';
    console.log(currentHour);
    console.log(display);
  } else if (currentHour >= 12 && currentHour < 18) {
    display.innerHTML = "Good afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    display.innerHTML = "Good evening";
  } else {
    display.innerHTML = "Good night";
  }
}
getGreeting ();

function getDayColor() {
  if (currentDay === 0 || currentDay === 6) {
   return
  }else if (currentDay === 1) {
    return 'darkgray';
  }else if (currentDay >= 2 && currentDay<= 5) {
    console.log(currentDay);
  }
  else {
    return 'red';
  }
  console.log(currentDay);

}

//display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
