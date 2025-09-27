import { createContext } from "react"
import Parent from "./components/parent";
import Name from "./components/name";

export const MyFirstContext = createContext();

function App() {

  return (
    <>
      <MyFirstContext.Provider value="Taso">
        <Parent />
      </MyFirstContext.Provider>
      <Name name="Taso"/>
    </>
  )
}

export default App
