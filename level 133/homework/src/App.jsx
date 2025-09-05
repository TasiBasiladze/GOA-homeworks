import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<p>page doesn't exist</p>}/>
      </Routes>
    </>
  )
}

export default App
