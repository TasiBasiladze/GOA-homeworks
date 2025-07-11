import { useEffect, useState } from "react"

function App() {
  const [name, setName] = useState("");
  function handleSubmit(e){
    e.preventDefault()
    setName(e.target.name.value)
  }

  useEffect(() => {
    console.log("new name:", name)
  }, [name])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <button>change name</button>
      </form>
      <p>hello {name}</p>
    </>
  )
}

export default App
