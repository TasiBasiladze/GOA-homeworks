import { useContext } from "react"
import { MyContext } from "../App"

function Child(){
    const {name, age} = useContext(MyContext)
    return (
        <>
            <p>my name is {name}</p>
            <p>i am {age} years old</p>
        </>
    )
}

export default Child