import React from "react";

function sum(a: number, b: number) { 
  alert(a + b);
}

// sum(12,24)

export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}

type PropsType = {
  title: string,
  tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map(t => <li> <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <button onClick={ () => { alert(t.id) } }>x</button>
            </li>

          )
        }

      </ul>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
    )
  }

