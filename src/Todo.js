import React from 'react';
// other imports...

function Todo({ todo, toggleTodo }) {
  // Todo logic...

  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="todo-text">{todo.name}</span>
      {/* other JSX */}
    </li>
  );
}

export default Todo;
