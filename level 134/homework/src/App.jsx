import { Routes, Route, useNavigate } from "react-router-dom";
import Languages from "./pages/languages";
import GoToLanguages from "./pages/goToLanguages";
import Python from "./pages/python";
import Js from "./pages/js";
import CPlusPlus from "./pages/c++";

function App() {

  const navigate = useNavigate();

  function nav(){
    navigate("/");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Languages />}/>
        <Route path="/goToLanguages" element={<GoToLanguages nav={nav}/>}/>
        <Route path="python" element={<Python />}/>
        <Route path="js" element={<Js />}/>
        <Route path="c++" element={<CPlusPlus />}/>
        <Route path="*" element={<p>page doesn't exist</p>}/>
      </Routes>
    </>
  )
}

export default App
