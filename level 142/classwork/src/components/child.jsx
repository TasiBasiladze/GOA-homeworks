import { useState } from "react";

function Child() {
  const [isError, setIsError] = useState(false)
  if(isError){
    throw new Error("error");
  }
 

  return (
    <div>
      <button onClick={() => console.log("button clicked")}>Click me (log)</button>
      <button onClick={() => setIsError(true)}>Click me (error)</button>
    </div>
  );
}

export default Child