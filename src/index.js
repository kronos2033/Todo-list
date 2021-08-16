import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import SearchPanel from "./Components/SearchPanel";
import TodoList from "./Components/TodoList";

export default function App() {
  const todoData = [
    {label: 'Drink Cofee', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Go run', important: false},
  ]
  return (
    <div>
      <Header />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));
