import { createContext } from "react"
import Parent from "./components/parent";

export const MyContext = createContext();

function App() {
  

  return (
    <>
      <MyContext.Provider value={{name: "taso", age: "15"}}>
        <Parent />
      </MyContext.Provider>
    </>
  )
}

export default App
