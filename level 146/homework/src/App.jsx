import { useMemo } from 'react';
import { useState } from 'react'

function expensiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < 5000; j++) {
      Math.sqrt(j * i); 
    }
    sum += i;
  }
  return sum;
}

function App() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('');
  const sum = useMemo(() => expensiveSum(num), [num])

  function handleNumChange(e){
    setNum(Number(e.target.value))
  }

  function handleTextChange(e){
    setText(e.target.value)
  }

  return (
    <>
      <input type="number" onChange={handleNumChange}/>
      {sum}
      <input type="text" onChange={handleTextChange}/>
      {text}
    </>
  )
}

export default App
