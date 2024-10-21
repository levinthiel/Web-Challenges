import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";


const initiallights = [
  {id: 1, name: "Livong room", isOn: false},
  {id: 2, name: "Kitchen", isOn: false},
  {id: 3, name: "Bedroom", isOn: false},
  {id: 4, name: "Bathroom", isOn: false},
  {id: 5, name: "Garage", isOn: false},
  {id: 6, name: "Porch", isOn: false},
  {id: 7, name: "Garden", isOn: false},
  {id: 8, name: "Office", isOn: false},
];

export default function App({ Component, pageProps }) {

  const [lightsOn, setLightsOn] = useState(initiallights);

  function handleToggle(lightId) {
    setLightsOn(lightsOn.map((light) => light.id === lightId ?{...light, isOn: !light.isOn} : light));
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lightsOn} handleToggle={handleToggle}  />
    </Layout>
  );
}
