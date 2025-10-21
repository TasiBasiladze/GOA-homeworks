import { useMemo, useState } from "react";

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
  const isPrime = useMemo(() => {
    if (num === "") return null;
    return isPrimeExpensive(Number(num));
  }, [num]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumChange = (e) => {
    setNum(e.target.value);
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

//useMemo is used to call expencive function only when it's needed, not every time when component is rendered.
//for example, in this code without useMemo isPrimeExpensive is called every time, even when we only change text type input
//and dont need this function, this makes code slower. but when we use useMemo - the problem is solved. now isPrimeExpensive
//is called only when is changed number type input. it makes code work faster.

//in the dependenvies massive we can write:
//1. props or state. and function will be called only when this exact props or state will be changed somehow
//2. it can be empty like []. then function will be called only when site is first rendered
//3. you can also not write dependencies massive at all. then function will be called every time when any state in a code is changed