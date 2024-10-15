import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pagecount, setpagecount] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pagecount}`);
        const data = await response.json();

        setPokemon(data.results);

      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pagecount]);

  function previousnext(btn) {
    
    const prevbutton = document.querySelector("[data-js='prevbtn']")
    prevbutton.removeAttribute("style","visibility:hidden")

    if(btn === "next"){
      setpagecount(pagecount +1)
    } else if(btn === "prev" && pagecount==0) {
      //console.log("no negative page")
      prevbutton.setAttribute("style","visibility:hidden")
    } else {
      setpagecount(pagecount -1)
    }
  }


  return (
    <main>
      <button type="button" data-js="prevbtn" onClick={() => previousnext("prev")}>Previous Page</button>
      <button type="button" onClick={() => previousnext("next")}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
