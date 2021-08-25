import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

import { useState } from "react";

import "./App.css";

const App = () => {
  let maxId = 100;
  const createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: ++maxId,
    };
  };
  const [todoData, setTodoData] = useState([
    createItem("Drink Coffee"),
    createItem("Make Awesome App"),
    createItem("Have a lunch"),
  ]);
  const [searchWord, setSearchWord] = useState("");

  const todoLength = todoData.filter((item) => item.done === false).length;
  const todoDones = todoData.filter((item) => item.done === true).length;
  const visibleData = search(todoData, searchWord)

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
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldElement = todoData[idx];
      const newElement = { ...oldElement, important: !oldElement.important };
      const items = [
        ...todoData.slice(0, idx),
        newElement,
        ...todoData.slice(idx + 1),
      ];
      return items;
    });
  };

  const toggleDone = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldElement = todoData[idx];
      const newElement = { ...oldElement, done: !oldElement.done };
      const items = [
        ...todoData.slice(0, idx),
        newElement,
        ...todoData.slice(idx + 1),
      ];
      return items;
    });
  };

  const changeWord = (word) => {
    setSearchWord(word);
  };

  function search (items, filterWord)  {
    if(searchWord.length === 0) {
      return items
    }
   return items.filter(item=>item.label.toLowerCase().indexOf(filterWord.toLowerCase())>-1)
  }
  return (
    <div className="todo-app">
      <Header toDo={todoLength} done={todoDones} />
      <div className="top-panel d-flex">
        <SearchPanel changeWord={changeWord} />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={visibleData}
        handleDelete={handleDeleteItem}
        handleAdd={handleAddItem}
        toggleImportant={toggleImportant}
        toggleDone={toggleDone}
      />
    </div>
  );
};

export default App;
