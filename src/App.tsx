import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";


function App() {

  let initTasks: Array<TaskType>  = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "ReactJS", isDone: true },
    { id: 4, title: "Redux", isDone: false },
  ]

  let arr = useState(initTasks)

  let tasks = arr[0]
  let setTasks = arr[1]


  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t =>  t.id !== id)
    setTasks(filteredTasks);
  }

  return (
    <div className="App">
      <Todolist title="What to learn?" 
                tasks={tasks} 
                removeTask={removeTask}
      />
    </div>
  );
}




export default App;
