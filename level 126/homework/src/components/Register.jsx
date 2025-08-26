import { useForm } from "../hooks/useForm.js";

const Register = ({ register }) => {
    const handleSubmit = useForm();

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={(e) => handleSubmit(e, register)}>
                <input type="text" name="fullname" placeholder="Enter your fullname" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="password" name="password" placeholder="Enter your password" required />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;