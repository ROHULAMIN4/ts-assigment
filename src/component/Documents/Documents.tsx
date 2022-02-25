import React from "react";

interface Todo {
  name: string;
}

interface Props {
  task: Todo;
  completeTask(taskNameToDelete: string): void;
}

const Documents = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.name}</span>
      </div>
      <button onClick={() => completeTask(task.name)}>Remove</button>
    </div>
  );
};

export default Documents;
