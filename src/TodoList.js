import React from 'react';
import Todo from './Todo';
import './style.css'; // Ensure the stylesheet is properly linked.

export default function TodoList({ todos, toggleTodo }) {
  return ( // Opening parenthesis for the return statement
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        ))}
      </ul>
    </div>
  ); // Closing parenthesis for the return statement
}
