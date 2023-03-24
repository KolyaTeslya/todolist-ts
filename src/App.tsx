import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {

  let tasks: Array<TaskType>  = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "ReactJS", isDone: true },
    { id: 4, title: "Redux", isDone: false },

  ]

  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks} />
    </div>
  );
}




export default App;
