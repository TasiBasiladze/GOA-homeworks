import { useForm } from "../hooks/useForm.js";

const Authorization = ({ authorization }) => {
    const handleSubmit = useForm();
    return (
        <div>
            <h2>Authorization</h2>
            <form onSubmit={(e) => handleSubmit(e, authorization)}>
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Authorization</button>
            </form>
        </div>
    );
}

export default Authorization;