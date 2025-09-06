import { useFormData } from "../hooks/useFormData"
import { Link } from "react-router-dom";

function Authorization({ authorization, isError, setIsError }){
    const handleSubmit = useFormData()
    return(
        <>
            <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, authorization)}>
                <input type="email" name="email" placeholder="email" required/><br /><br />
                <input type="password" name="password" placeholder="password" required/><br /><br />
                {isError && <p style={{height: 20, color: "red"}}>account doesn't exist!</p>}
                <button>submit</button>
            </form>
            <p>don't have an account yet? <Link to="/register" onClick={() => setIsError(false)}>register</Link></p>
        </>
    )
}

export default Authorization