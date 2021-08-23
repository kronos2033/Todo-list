import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [todoData, setTodoData] = useState([
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }]
  );
  
  const handleDeleteItem = (id) => {
    setTodoData(todoData=>{
      const idx = todoData.findIndex(el=> el.id === id )
      const items =[
        ...todoData.slice(0,idx), 
        ...todoData.slice(idx+1)
      ]
      return items
    })
  };
  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} handleDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
