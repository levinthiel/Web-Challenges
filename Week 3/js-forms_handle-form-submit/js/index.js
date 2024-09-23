console.clear();



const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    

    const badness = document.getElementById("badness");
    const badnessValue = +badness.value;
    const agesubmitted = +data.age;
    console.log(agesubmitted);
    console.log(badnessValue);

    const firstNamesubmitted =  data.firstName;
    console.log("first name submitted: " + firstNamesubmitted);

    const agebadnesssum  = badnessValue + agesubmitted ; 
    console.log(`the age badness sum of ${firstNamesubmitted} is ${agebadnesssum}`);

    /* event.target.reset(); */
})