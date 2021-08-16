import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css'

export default function TodoList({ todos }) {
  console.log("rest");
  return (
    <div>
      <ul className='list-group todo-list'>
        {todos.map((todo,index) => {
          return (
            <li key={index} className='list-group-item'>
              <TodoListItem {...todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
