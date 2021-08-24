import React from 'react'
import  './Header.css';
export default function Header  ({toDo, done})  {
    return (
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{toDo} more to dos, {done} done</h2>
      </div>
    );
  };
