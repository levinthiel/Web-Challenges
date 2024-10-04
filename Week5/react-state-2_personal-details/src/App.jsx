import React from "react";
import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";


export default function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");

  function handleSubmit(event) {
    
    event.preventDefault();
    let nameinput = event.target.name.value
    let emailinput = event.target.email.value
    setName(nameinput)
    setEmail(emailinput)
    event.target.reset();
    event.target.name.focus();
    console.log(nameinput)
    console.log(emailinput)
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onHandleInput={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
