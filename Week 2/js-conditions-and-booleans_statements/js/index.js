console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r13377";
const checkPW = SUPER_SECRET_PASSWORD === receivedPassword;

if (checkPW){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else {
    console.log("Access denied!");
}
//***************************************************************************************************** */
// Part 2: Even / Odd
const number = 6;

const checkOddEven = number % 2 == 0;

if (checkOddEven) {
    console.log("Even Steven");
}else {
    console.log("Odd number");
}
//***************************************************************************************************** */
// Part 3: Hotdogs
const numberOfHotdogs = 1000042;

if (numberOfHotdogs<5){
    console.log("2€ per HawtDawg");
}else if (5<numberOfHotdogs && numberOfHotdogs<100){
    console.log("1.5€ per Dawg");
}else if (101<numberOfHotdogs && numberOfHotdogs<1000000){
    console.log("1€ per Dawg");
}else {
    console.log("0.1€ per Dawg");
}

//***************************************************************************************************** */
// Part 4: Daytime
const currentHour = 12;
let statement ="";
if (currentHour<17){
  statement = "Still need to learn...";
}else {
    statement = "Party time!";
}
console.log(statement);
//***************************************************************************************************** */
// Part 5: Greeting
const userName = "Archibald";

if (userName === "Archibald" ) {
    const greeting = "Hello coach " + userName + "!";
    console.log(greeting);
}else {
    const greeting = "Hello " + userName + "!";
    console.log(greeting);
}

