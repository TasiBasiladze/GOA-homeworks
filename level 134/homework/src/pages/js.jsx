import javascript from "../assets/javascript.webp"
import { Link } from "react-router-dom";

function Js(){
 return(
    <>
        <h1>JavaScript</h1>
        <img src={javascript} alt="javascript image" style={{width: "20%"}}/>
        <p>JavaScript is a high-level, dynamically typed programming language primarily <br />
        known for enabling interactive and dynamic content on websites. It is a versatile <br />
        language that adheres to the ECMAScript standard.</p>
        <br />
        <br />
        <Link to="/">Go back</Link>
    </>
 )
}

export default Js