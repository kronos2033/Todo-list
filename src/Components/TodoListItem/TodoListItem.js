import React from "react";
import "./TodoListItem.css";
import { useState } from "react";


export default function TodoListItem  ({ label, important = false }) {
  const [done, setDone] = useState(false)
  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal",
  };
  
  const todoListItemClick = () => setDone(!done)
  return (
    <span className={`todo-list-item ${done && 'done'}`}>
      <span className="todo-list-item-label" style={style} onClick={todoListItemClick}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
