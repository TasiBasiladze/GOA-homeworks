import { useState } from "react";
import { useForm } from "./useForm.js";
import { Link } from "react-router-dom";

const Register = ({ register }) => {
    const [isError, setIsError] = useState(false); 
    const handleSubmit = useForm(); 

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, setIsError, register)}>
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" placeholder="Enter your name" required />
                <br /><br />

                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="Enter your email" required />
                <br /><br />

                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Enter your password" required />
                <br /><br />

                <button>Register</button>
                <p style={{height: 10, color: "red", fontSize: 13}}>
                    {isError ? "Email already exists!" : ""}
                </p>
            </form>

            <p>Already have an account? <Link to="/authorization"><b>Authorization</b></Link></p>
        </div>
    );
}

export default Register;