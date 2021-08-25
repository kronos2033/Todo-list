import React from "react";
import "./TodoListItem.css";

export default function TodoListItem({ important, done, label, handleDelete, toggleImportant,toggleDone }) {

  let classNameItem = `todo-list-item ${important && `important`} ${
    done && "done"
  } `;

  return (
    <span className={classNameItem}>
      <span className="todo-list-item-label" onClick={toggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={toggleImportant}
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
