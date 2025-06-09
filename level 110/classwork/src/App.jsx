import Parent from "./components/parent"

function App() {
  function handleHover(){
    alert("you touched button")
  }
  return ( <>
  <Parent onHover={handleHover}>
    <p>Hello World</p>
    <p>blahblah</p>
    <p>my name is taso</p>
  </Parent>
  </>
)
}

export default App
