import React, { useState } from "react";
import "./App.css";
import Documents from "./component/Documents/Documents";

function App() {
  interface Todo {
    name: string;
  }

  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { name: task };
    setTodo([...todo, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.name !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header conainer">
        <input
          value={task}
          type="text"
          placeholder="Todo..."
          onChange={handleChange}
          className="inputfield"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todoList">
        {todo.map((task: Todo, key: number) => {
          return (
            <Documents key={key} task={task} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
