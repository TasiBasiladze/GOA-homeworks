import { useColor } from "./hook/useColor"

function App() {

  const [color, handleColorChange] = useColor()

  return (
    <>
      <div style={{width: "100px", height: "100px", backgroundColor: color}}>

      </div>
      <button onClick={() => handleColorChange("red")}>red</button>
      <button onClick={() => handleColorChange("green")}>green</button>
      <button onClick={() => handleColorChange("yellow")}>yellow</button>
    </>
  )
}

export default App
