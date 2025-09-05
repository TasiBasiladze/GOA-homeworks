import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <h1>Home Page</h1>
            <nav>
                <Link to="/about">to about</Link> <br></br><br></br>
                <Link to="/contact">to contact</Link>
            </nav>
        </>
    );
};

export default Home;