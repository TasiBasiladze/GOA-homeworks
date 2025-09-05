import cplusplus from "../assets/C++.svg"
import { Link } from "react-router-dom";

function CPlusPlus(){
    return(
        <>
            <h1>C++</h1>
            <img src={cplusplus} alt="c++ image" style={{width: "20%"}}/>
            <p>C++ is a high-performance, general-purpose programming language developed by Bjarne<br />
            Stroustrup as an extension of the C language, adding object-oriented programming (OOP) features. <br />
            It is considered a middle-level language because it combines features of both high-level languages <br />
            (like OOP, exception handling, and templates) and low-level capabilities <br />
            (such as direct memory manipulation and system-level programming). </p>
            <br />
            <br />
            <Link to="/">Go back</Link>
        </>
    )

}

export default CPlusPlus