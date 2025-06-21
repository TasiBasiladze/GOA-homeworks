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

  function handleDeleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
