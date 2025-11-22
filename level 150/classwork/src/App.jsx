import { useState } from 'react'

function App() {
  const [superheroe, setSuperheroe] = useState([])

  async function generateSuperheroes(){
    const { randomSuperhero } = await import("superheroes")
    for (let i = 0; i < 10; i++){
      setSuperheroe(prev => [...prev, randomSuperhero()]);
    }
  }

  return (
    <>
      <button onClick={generateSuperheroes}>generate 10 random superheroes</button>
      {superheroe.map((element, i ) => {
        return <p key={i}>{element}</p>
      })}
    </>
  )
}

export default App
