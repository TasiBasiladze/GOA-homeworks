import { Link } from "react-router-dom";

function Contact(){
    return (
        <>
            <h1>Contact Page</h1>
            <nav>
                <Link to="/">to home</Link> <br></br><br></br>
                <Link to="/about">to about</Link>
            </nav>
        </>
    );
};

export default Contact;