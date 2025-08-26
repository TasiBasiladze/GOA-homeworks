import { useState } from "react";
import Authorization from "./components/Authorization.jsx";
import Register from "./components/Register.jsx"

const App = () => {
    const [users, setUsers] = useState([]);

    console.log(users);

    const register = (formData) => {
        for(const user of users) {
            if(user.email === formData.email) {
                alert("Email already exists!");
                return;
            }
        }

        setUsers(prev => [...prev, formData]);
        alert("Register sucsessfully!")
    }

    const authorization = (formData) => {
        for(const user of users) {
            if(user.email === formData.email && user.password === formData.password) {
                alert("Authorization sucsessfully!")
                return;
            }
        }

        alert("User not found!");
    }

    return (
        <>
          <Register register={register} />
          <Authorization authorization={authorization} />
        </>
    );
}

export default App;