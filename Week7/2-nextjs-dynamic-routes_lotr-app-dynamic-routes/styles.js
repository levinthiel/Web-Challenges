import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    max-width: 50%;
    margin: 150px auto;
    background: 	#f5eece;
}
`;
