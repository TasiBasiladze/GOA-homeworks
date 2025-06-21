import { useState } from "react";

function App() {
  const [text, setText] = useState("");      
  const [tasks, setTasks] = useState([]);    

  function handleInputChange(e) {
    setText(e.target.value);                
  }

  function handleAddTask() {
    if (text.trim() === "") return;         
    setTasks([...tasks, text]);             
    setText("");                            
  }

  return (
    <>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
