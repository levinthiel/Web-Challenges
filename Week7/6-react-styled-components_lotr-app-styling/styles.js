import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google"; 

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    max-width: 30%;
    margin: 150px auto;
    font-family: ${lora.style.fontFamily};
    background-color: beige;
  }
`;
