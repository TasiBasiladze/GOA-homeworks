import { useState } from "react";

function App() {
  // create a state variable "show" and a setter "setShow"
  // initially "show" is false (no confetti)
  const [show, setShow] = useState(false);

  // define an async function that will run when the button is clicked
  async function handleClick(){
    // dynamically import the react-confetti module at runtime
    // .default is needed because react-confetti uses a default export
    const Confetti = (await import("react-confetti")).default;

    // update the state "show" to render the Confetti component
    // width and height are set to window size so it covers the screen
    setShow(<Confetti width={window.innerWidth} height={window.innerHeight} />);
  }
  

  return (
    <div>
      <button onClick={handleClick}>let's part!</button>
      {show}
    </div> 
  )
}

export default App
