import { Link } from "react-router-dom";

function Languages(){

    return(
        <div>
            <Link to="/python">Python</Link><br></br><br></br>
            <Link to="/js">JavaScript</Link><br></br><br></br>
            <Link to="/c++">C++</Link>
        </div>
    )
}

export default Languages