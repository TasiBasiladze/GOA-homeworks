import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Register.jsx";
import Authorization from "./Authorization.jsx";
import Home from "./Home.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const App = () => {
    const [curUser, setCurUser] = useState(() => {
        const savedUser = localStorage.getItem("curUser");

        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            return Object.keys(parsedUser).length ? parsedUser : {};
        }
        return {}
    });
    const navigate = useNavigate();

    const register = async (setIsError, formData) => {
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.status === 201) {
                navigate("/authorization");
            } else {
                setIsError(true); 
            }
        } catch (err) {
            console.error(err);
            setIsError(true);
        }
    };

    const authorization = async (setIsError, formData) => {
        try {
            const response = await fetch("http://localhost:3000/authorisation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                const user = await response.json(); 
                setCurUser(user);    
                localStorage.setItem("curUser", JSON.stringify(user));                 
                navigate("/");
            } else {
                setIsError(true);
            }
        } catch (err) {
            console.error(err);
            setIsError(true);
        }
    };
  
    const handleLogOut = () => {
        setCurUser({});
        localStorage.removeItem("curUser");
        navigate("/authorization");
    };

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute curUser={curUser}>
                        <Home curUser={curUser} handleLogOut={handleLogOut} />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={<Register register={register} />} />
                <Route path="/authorization" element={<Authorization authorization={authorization} />} />
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </>
    );
};

export default App;