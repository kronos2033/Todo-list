import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import AddForm from "../AddForm/AddForm";
import "./TodoList.css";

export default function TodoList({
  todos,
  handleDelete,
  handleAdd,
  toggleImportant,
  toggleDone,
}) {
  return (
    <div>
      <ul className="list-group todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="list-group-item">
              <TodoListItem
                {...todo}
                handleDelete={() => {
                  handleDelete(todo.id);
                }}
                toggleImportant={() => toggleImportant(todo.id)}
                toggleDone={() => {
                  toggleDone(todo.id);
                }}
              />
            </li>
          );
        })}
      </ul>
      <AddForm
        handleAdd={handleAdd}
      />
    </div>
  );
}
