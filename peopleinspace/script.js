const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const main = document.querySelector("[data-js='main']");
const filterallbtn = document.querySelector("[data-js='filterall']");
const filterissbtn = document.querySelector("[data-js='filteriss']");
const filtertbtn = document.querySelector("[data-js='filtert']");



async function peopleinspace() {
    //Fetch------------------------------------------------------------------------------
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    console.log("data: ", data);
    //EOF Fetch---------------------------------------------------------------------------

    //Number of people in space-----------------------------------------------------------
    const numberofpeople= data.people.length
    peopleInSpace.innerHTML = numberofpeople;
    //Number of people in space-----------------------------------------------------------
    
    //create the container for the names--------------------------------------------------
    const ul = document.createElement("ul")
    ul.setAttribute("data-js",'ul')
    main.append(ul)
    const uldatajs = document.querySelector("[data-js='ul']");
    //create the container for the names--------------------------------------------------


    filterallbtn.addEventListener("click", () => {
        uldatajs.innerHTML=""
        data.people.forEach(person => {
            const li = document.createElement("li")
            uldatajs.append(li)
            li.innerHTML= person.name
        });
    })

    filterissbtn.addEventListener("click", () => {
        filterPeople("ISS")
    })
    filtertbtn.addEventListener("click", () => {
        filterPeople("Tiangong")
    })
    function filterPeople(whichcraft){
        uldatajs.innerHTML=""
        issortiangong =  data.people.filter((person) => person.craft == whichcraft)
        issortiangong.forEach(person => {
            const li = document.createElement("li")
            const uldatajs=document.querySelector("[data-js='ul']");
            uldatajs.append(li)
            li.innerHTML= person.name
        });
    }
}
peopleinspace()