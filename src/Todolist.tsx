import React from "react";


export function Todolist() {
    return (
    <div>
      <h3>What to learn?</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={true} /><span>CSS&HTML</span></li>
        <li><input type="checkbox" checked={true} /><span>JS</span></li>
        <li><input type="checkbox" checked={false} /><span>React</span></li>
      </ul>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    )
  }
