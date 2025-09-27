import { useState } from "react"
import baklava from "./images/image-baklava-thumbnail.jpg"
import brownie from "./images/image-brownie-thumbnail.jpg"
import cake from "./images/image-cake-thumbnail.jpg"
import cream from "./images/image-creme-brulee-thumbnail.jpg"


function App() {
  const [cart, setCart] = useState([])

  
  
  return (
   <>
    <img src={baklava} alt="" />
    <button>Add to Cart</button>
    <img src={brownie} alt="" />
    <button>Add to Cart</button>
    <img src={cake} alt="" />
    <button>Add to Cart</button>
    <img src={cream} alt="" />
    <button>Add to Cart</button>
    
   </>
  )
}

export default App
