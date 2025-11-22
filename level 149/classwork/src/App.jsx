import { useState } from 'react'
import Users from './components/users';

function App() {
  const [count, setCount] = useState(0)

  function handleCunt(){
    setCount(count + 1)
  }

  const getUsers = useCallback(() => {
    return ["Anna", "Luka", "Nika"];
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleCunt}>+1</button>
      <Users getUsers={getUsers}/>
    </>
  )
}

export default App
