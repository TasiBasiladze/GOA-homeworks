import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    //without the cleanup function, a new event listener is added on every render,
    //causing multiple listeners to stack up and trigger multiple times.
    document.addEventListener("mousedown", increase);

    return () => {
      document.removeEventListener("mousedown", increase);
    }
  })

  function increase(){
    setCount(prev => prev + 1);
  }

  return (
    <>
      <p>counter: {count}</p>
    </>
  )
}

export default App
