import "./styles.css";

export default function App() {
  return <Component 
            name="Levin"
          />;
}

function Component ({ name }) {
  return(
    <h1>
      Hi { name ? name : "coach" }
    </h1>
  )
}