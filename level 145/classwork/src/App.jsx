import { useState } from "react";

function isPrimeExpensive(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  let result = true;
  for (let i = 2; i < num; i++) {
    for (let j = 0; j < 10000; j++) {
      Math.sqrt(j);
    }

    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const [isPrime, setIsPrime] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumChange = (e) => {
    const value = e.target.value;
    setNum(value);

    if (value !== "") {
      setIsPrime(isPrimeExpensive(Number(value))); 
    } else {
      setIsPrime(null);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      {text !== "" && <p>text: {text}</p>}
      <div>
        <input
          type="number"
          value={num}
          onChange={handleNumChange}
          style={{ marginLeft: "10px" }}
        />
        {isPrime !== null && (
          <p>
            {num} is {isPrime ? "prime" : "not prime"}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;