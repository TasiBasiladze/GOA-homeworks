import { useState } from "react"

function Child(){
    const [isError, setIsError] = useState(false)
    const [isSwitch, setIsSwitch] = useState(false)
    
    if(isError){
        throw new Error("error")
    }
    
    return(
        <div style={{backgroundColor: isSwitch ? "black" : "white"}}>
            <button onClick={() => setIsSwitch(!isSwitch)}>switch</button>
            <button onClick={() => setIsError(true)}>error</button>
        </div>
    )
}

export default Child;