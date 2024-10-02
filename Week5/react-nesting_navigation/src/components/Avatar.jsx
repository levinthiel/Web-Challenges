import avatar from "../img/avatar.jpg"
import Img from "./Imgs.jsx"

export default function Avatar () {
    return (
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Img src={avatar} alt="avatar"/>
        </button>
    )
}