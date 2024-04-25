
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[inputValue, setInputValue] = useState("")
  const[todos, setTodos] = useState([]);
  function handleAddTodo(){
    setTodos([...todos, inputValue]);
    setInputValue("")
  }

  function handleDelet(index){
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
        <input type="text" placeholder="Enter to do" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {
            todos.map((todos, index)=>{
              return(
                <li key={index}>
                  {todos}
                  <button onClick={()=>handleDelet(index)}>Delet</button>
                </li>
              )
            })
          }
        </ul>
        
    </div>
  )
}

export default App
