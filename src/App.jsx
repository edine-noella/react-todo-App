import Todo from "./components/Todo";
import  importedTodos  from "./todos";
import { useState } from "react";
import "./App.css";


function App() {
  const [inputData, setInputData] = useState({todo: ""});

  function handleChange(event) {
    const {name, value} = event.target;
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [name]: value
      }
    }
    )}

  const [todos, setTodos] = useState(importedTodos);


  const todoList = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} onDelete={onDelete} />;
  });

  function handleAddTodo(event) {
    event.preventDefault();
    if(inputData.todo){
      
      if(todos.some(todo => todo.title === inputData.todo)){
        alert("Todo already exists")
        return;
      }
    setTodos((prevTodos) => {
      return [...prevTodos, {id: prevTodos.length + 1, title: inputData.todo, completed: false}];
    });
  }else{
    alert("Please enter a todo")
  }
  }

 function onDelete(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }


  return (
    <div>
      <h1 className="text-9xl text-center mt-20 text-gray-300">todos</h1>

      <form className="">
        <div className="flex justify-center mt-20 max-w-screen-md mx-auto relative">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-full px-6 py-3 w-10/12 drop-shadow-md text-lg"
            placeholder="Add todo..."
            name = "todo"
            onChange = {handleChange}
            value = {inputData.todo}
          />
          <button type="" onClick={handleAddTodo}>
            <svg
              className="w-7 h-7 text-cyan-800 absolute right-24 top-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-20 max-w-screen-sm mx-auto">{todoList}</div>
      </form>
    </div>
  );
}

export default App;
