import HomePage from ".";
import GlobalStyle from "../styles";

/*  import Vol1 from "../pages/volumes/the-fellowship-of-the-ring"
import Vol2 from "../pages/volumes/the-two-towers"
import Vol3 from "../pages/volumes/the-return-of-the-king"  */

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HomePage/>
{/*      <Vol1/>
      <Vol2/>
      <Vol3/>  */}
    </>
  );
}
