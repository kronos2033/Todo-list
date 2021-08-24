import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

import { useState } from "react";

import "./App.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const App = () => {
  let maxId = 10;
  const createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id:maxId++
    }
  }

  const [todoData, setTodoData] = useState([
    createItem("Drink Coffee"),
    createItem("Make Awesome App"),
    createItem("Have a lunch"),
  ]);

  const handleDeleteItem = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const items = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return items;
    });
  };

  const handleAddItem = (newItemText) => {
    const newItem = createItem(newItemText);
    setTodoData((todoData) => {
      const items = [...todoData, newItem];
      return items;
    });
  };

    const toggleImportant = (id) => {
      setTodoData(todoData => {
        const idx=todoData.findIndex((el) => el.id === id);
        const oldElement=todoData[idx]
        const newElement={...oldElement, important: !oldElement.important}
        const items=[...todoData.slice(0, idx),newElement, ...todoData.slice(idx + 1)];
        return items
        }
      )}

    const toggleDone = (id) => {
      setTodoData(todoData => {
        const idx=todoData.findIndex((el) => el.id === id);
        const oldElement=todoData[idx]
        const newElement={...oldElement, done: !oldElement.done}
        const items=[...todoData.slice(0, idx),newElement, ...todoData.slice(idx + 1)];
        return items
        }
      )}

  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        handleDelete={handleDeleteItem}
        handleAdd={handleAddItem}
        toggleImportant={toggleImportant}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default App;
