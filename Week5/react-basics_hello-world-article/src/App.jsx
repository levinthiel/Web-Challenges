import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle(){
  return <article>
          <h1>
            Article H1
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          </p>
        </article>
}
