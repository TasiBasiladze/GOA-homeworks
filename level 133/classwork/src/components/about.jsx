import { Link } from "react-router-dom";

function About(){
    return (
        <>
            <h1>About Page</h1>
            <nav>
                <Link to="/">to home</Link> <br></br><br></br>
                <Link to="/contact">to contact</Link>
            </nav>
        </>
    );
};

export default About;