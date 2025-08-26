import { useText } from "./hook/useText"


function App() {
  
  const [text, handleText] = useText()

  return (
    <>
      
      <input type="text" onChange={handleText}/>
      <p>text: {text}</p>
    </>
  )
}

export default App
