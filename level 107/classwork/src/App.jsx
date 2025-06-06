import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick = () => {
    const name = prompt("Please enter your name:");
    if (name) {
      alert(`Hello, ${name}!`);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App

