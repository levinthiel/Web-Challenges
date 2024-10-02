import "./styles.css";

export default function App() {
  return <Article/>
}

function Article() {
  return  (
          <article className="article">
            <h2 className="article__title">lalalala</h2>
            <label htmlFor="input" >falala</label>
            <input id="input"></input>
            <a className="article__link" href="https://github.com/neuefische/hh-web-24-8/blob/main/sessions/react-basics/react-basics.md">blub</a>
          </article>
  )
}
