function App() {
  const p1Style = {
    color: "brown",
    backgroundColor: "black",
    border: "1px brown solid"
  }

  return (
    <>
      <div>
        <p style={{color: "red", backgroundColor: "black", border: "2px red solid"}}>hello world</p>
        <p style={{color: "green", backgroundColor: "blue", border: "2px green solid"}}>hello world</p>
      </div>
      <div>
        <p style={p1Style}>hello world</p>
        <p style={p1Style}>hello world</p>
      </div>
      <div>
        <p className="p1">hello world</p>
        <p className="p1">hello world</p>
      </div>
    </>
  )
}

export default App
