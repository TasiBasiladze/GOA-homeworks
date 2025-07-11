import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [isInitialised, setIsInitialised] = useState(false);

  function handleSubmitTimer(e) {
    e.preventDefault();
    const value = Number(e.target.time.value);
    setTimer(value);
    setIsRunning(true);
    localStorage.setItem("timerTimeLeft", value);
    localStorage.setItem("timerIsRunning", true);
    e.target.reset();
  }

  function handleStart() {
    setIsRunning(true);
    localStorage.setItem("timerIsRunning", true);
  }

  function handleStop() {
    setIsRunning(false);
    localStorage.setItem("timerIsRunning", false);
  }

  useEffect(() => {
    const savedTime = Number(localStorage.getItem("timerTimeLeft"));
    const savedRunning = localStorage.getItem("timerIsRunning") === "true";
    setTimer(savedTime);
    setIsRunning(savedRunning);
    setIsInitialised(true);
  }, []);

  useEffect(() => {
    if (!isInitialised) return;

    let timerId;
    if (isRunning && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prev) => {
          const newTime = prev - 1;
          localStorage.setItem("timerTimeLeft", newTime);
          if (newTime <= 0) {
            setIsRunning(false);
            localStorage.setItem("timerIsRunning", false);
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timer, isInitialised]);

  return (
    <>
      <form onSubmit={handleSubmitTimer}>
        <input type="number" name="time" />
        <button>Submit Timer</button>
      </form>
      <p>{timer}</p>
      <button onClick={handleStop}>Stop Timer</button>
      <button onClick={handleStart}>Start Timer</button>
    </>
  );
}

export default App;