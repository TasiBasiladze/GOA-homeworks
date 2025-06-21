import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    return (
        <>
            <p>count: {count}</p>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

export default Counter;