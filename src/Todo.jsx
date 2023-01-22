import React from "react";
import "./style.css";
export default function Todo({ todo, toggleTodo }) {
  function handelTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div className="todo">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handelTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
