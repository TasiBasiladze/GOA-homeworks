import { Link } from "react-router-dom";
import propsDrilling from "../images/propsDrilling.png"

function PropsDrilling(){
    return (
        <div>
            <Link to="/context">context</Link>
            <h1>Props drilling</h1>
            <img src={propsDrilling} alt="" style={{width: "30%"}}/>
            <p>Data is passed manually through every level of the component tree using props. <br />
            Even if some components dont use the data, they still must receive it and pass it down. <br />
            It works fine for small apps, but gets messy if the tree is deep.</p>
        </div>
    )
}

export default PropsDrilling