import { useState } from "react";
import { useForm } from "./useForm.js";
import { Link } from "react-router-dom";

const Authorization = ({ authorization }) => {
    const [isError, setIsError] = useState(false); 
    const handleSubmit = useForm(); 

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, setIsError, authorization)}>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="Enter your email" required />
                <br /><br />

                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Enter your password" required />
                <br /><br />

                <button>Authorization</button>
                <p style={{height: 10, color: "red", fontSize: 13}}>
                    {isError ? "User not found!" : ""}
                </p>
            </form>

            <p>Don't have an account? <Link to="/register"><b>Register</b></Link></p>
        </div>
    );
}

export default Authorization;