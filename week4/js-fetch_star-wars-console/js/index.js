console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    const response = await fetch(url)
    const value = await response.json();
    console.log(value);
    console.log(value.results[3]);
    console.log(value.results[2].eye_color);
  
}

fetchData();
