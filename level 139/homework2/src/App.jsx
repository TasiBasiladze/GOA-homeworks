import { Routes, Route } from "react-router-dom";
import Context from "./components/context"
import PropsDrilling from "./components/proprsDrilling"
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<PropsDrilling />}/>
        <Route path="/context" element={<Context />}/>
      </Routes>
      
    </>
  )
}

export default App
