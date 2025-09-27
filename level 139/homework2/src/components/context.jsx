import { Link } from "react-router-dom";
import contextImage from "../images/context.png"

function Context(){
    return (
        <div>
            <Link to="/">props drilling</Link>
            <h1>Context</h1>
            <img src={contextImage} alt="" style={{width: "30%"}}/>
            <p>Data is stored in a Context (like a global box) and can be accessed by any child component directly. <br />
            No need to pass props through intermediate components. it's best to use when you have big app and need to <br />
            share state or data across many components.</p>
        </div>
    )
}

export default Context