import React from "react";
import "./TodoListItem.css";
import { useState } from "react";

export default function TodoListItem({ label, handleDelete }) {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);
  let classNameItem = `todo-list-item ${important && `important`} ${
    done && "done"
  } `;

  const handleTodoListItemClick = () => setDone((done) => !done);

  const handleMarkImportant = () => setImportant((important) => !important);
  return (
    <span className={classNameItem}>
      <span className="todo-list-item-label" onClick={handleTodoListItemClick}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={handleMarkImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={handleDelete}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}
