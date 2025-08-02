import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState("");
  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value}&appid=4188da362aa4a8eea26867fefe1f1327`
      );
      const result = await response.json();
      setWeather(result.weather[0]);
      setTemperature(result.main.temp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
    
    return () => {
      form.removeEventListener("submit", handleSubmit);
      };
  }, [weather, temperature]); 

  return (
    <>
      <form>
        <input type="text" name="city" />
        <button>Submit</button>
      </form>
      <p>Weather: {weather.main}</p>
      <p>Description: {weather.description}</p>
      <p>Temperature: {temperature}</p>
    </>
  );
}

export default App;
