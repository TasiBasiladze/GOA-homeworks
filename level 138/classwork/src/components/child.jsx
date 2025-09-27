import { useContext } from "react"
import { MyFirstContext } from "../App"

function Child(){
    const name = useContext(MyFirstContext);
    return (
        <>
            <p>my nami is {name}</p>
        </>
    )
}

export default Child