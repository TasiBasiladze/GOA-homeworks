import { useEffect, useState } from "react";

function App() {
  const [advice, setIdvice] = useState("");
  
  async function fetchData() {
      try{
        const response = await fetch("https://api.adviceslip.com/advice");
        const result = await response.json();
        setIdvice(result.slip.advice);
      } catch (error){
        console.log(error);
      }
    }
  
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <p>{advice}</p>
    </>
  )
}

export default App
