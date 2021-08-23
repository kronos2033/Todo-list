import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

export default function TodoList({ todos,handleDelete }) {
  
  return (
    <div>
      <ul className='list-group todo-list'>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='list-group-item'>
              <TodoListItem {...todo} handleDelete={()=>{handleDelete(todo.id)}}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
