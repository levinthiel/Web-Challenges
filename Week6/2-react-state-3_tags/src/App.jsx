import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

function handleaddtag(newdata){
  console.log(newdata)
  setTags([...tags, newdata])
}
function handleDeleteTag(tagtodelete){
  setTags(tags.filter((tag) => tag !== tagtodelete));
}
  return (
    <main className="app">
      <Form onAddTag={handleaddtag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
