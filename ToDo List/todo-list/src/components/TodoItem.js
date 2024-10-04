import React from 'react';

function TodoItem({ task, toggleComplete, deleteTask }) {
  return (
    <li className="task-item">
      <span
        onClick={toggleComplete}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      <button onClick={deleteTask} className="delete-btn">Delete</button>
    </li>
  );
}

export default TodoItem;
