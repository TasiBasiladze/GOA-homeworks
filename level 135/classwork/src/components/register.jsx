import { useFormData } from "../hooks/useFormData"
import { Link } from "react-router-dom";

function Register({ register, isError, setIsError }){
    const handleSubmit = useFormData()
    return(
        <>
            <h1>Registration</h1>
            <form onSubmit={(e) => handleSubmit(e, register)}>
                <input type="text" name="name" placeholder="name" required/> <br /><br />
                <input type="email" name="email" placeholder="email" required/> <br /><br />
                <input type="password" name="password" placeholder="password" required/><br /><br />
                <label htmlFor="user">user</label>
                <input type="radio" name="checkbox" value="user" required/><br />
                <label htmlFor="admin">admin</label>
                <input type="radio" name="checkbox" value="admin"/><br /><br />
                {isError && <p style={{height: 20, color: "red"}}>email already exists!</p>}
                <button>submit</button>
            </form>
            <p>already have an account? <Link to="/authorization" onClick={() => setIsError(false)}>authorization</Link></p>
        </>
    )
}

export default Register