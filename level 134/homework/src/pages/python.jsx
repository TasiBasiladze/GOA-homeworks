import python from "../assets/python.webp"
import { Link } from "react-router-dom";

function Python(){
 return(
    <>
        <h1>Python</h1>
        <img src={python} alt="python logo" style={{width: "20%"}}/>
        <p>Python is a high-level, interpreted, general-purpose programming language known <br />
        for its clear and readable syntax. It was created by Guido van Rossum and first released <br />
        in 1991. The name "Python" is a tribute to the British comedy group Monty Python. </p> 
        <br />
        <br />
        <Link to="/">Go back</Link>
    </>
 )
}

export default Python