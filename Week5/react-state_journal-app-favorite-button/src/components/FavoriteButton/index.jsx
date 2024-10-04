import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import React, { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setisFavorite(!isFavorite)
        console.log("star is filled: " + !isFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
