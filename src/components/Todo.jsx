/* eslint-disable react/prop-types */
import { useState } from "react";

function Todo(props) { 
 
    const [formData, setFormData] = useState({
        id: props.todo.id,
        title: props.todo.title,
        completed: props.todo.completed
    });

    function handleCompleteClick(event) {
        setFormData((prevFormData) => {        
            return {
                ...prevFormData,
                completed: event.target.checked
            }
        });

        if (event.target.checked) {            
            document.getElementById(props.todo.id).nextSibling.style.textDecoration = "line-through";
        }else{
            document.getElementById(props.todo.id).nextSibling.style.textDecoration = "none";
        }
    }

    


  return (
    <div>
    <div className="flex justify-between">
      <div className="flex gap-2">
        <input type="checkbox" className="h-6 w-5 bg-cyan-800"
        checked={formData.completed}
        onChange={handleCompleteClick}
        name = "completed"   
        id = {props.todo.id}    
          
         />

        <p className="text-lg text-gray-600">{props.todo.title}</p>
      </div>
     
     <button 
     onClick = {() => {
        props.onDelete(props.todo.id)
    }}

     >
      <div className=" bg-slate-200 h-10 w-10 rounded-full flex justify-center items-center ">
        <svg
          className="w-7 h-7 text-red-500 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
        </button>    
    </div>
    <hr className="mt-5"></hr>
    </div>
  );
}

export default Todo;
