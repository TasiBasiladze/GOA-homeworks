import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import Register from "./components/register";
import Authorization from "./components/authorization";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./hooks/useLocalStorage";
import ProtectedRoute from "./components/protectedRoute";

function App(){
  const [users, setUsers] = useState(getLocalStorage("users") || []);
  const [curUser, setCurUser] = useState(getLocalStorage("curUser") || {});
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate()

  function register(formData){
    for(const user of users){
      if(user.email === formData.email){
        setIsError(true);
        console.log("email already exists!")
        return
      }
    }

    
    setUsers(prev => {
      setLocalStorage("users", [...prev, formData])
      return [...prev, formData]
    })
    setIsError(false);
    navigate("/authorization");
  }

  function authorization(formData){
    for(const user of users){
      if(user.email === formData.email && user.password === formData.password){
        setLocalStorage("curUser", user);
        setCurUser(user);
        navigate("/");
        setIsError(false);
        return;
      } 
    }
    console.log("account doesn't exist")
    setIsError(true);
  }

  function handleLogOut(){
    setLocalStorage("curUser", {});
    setCurUser({});
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute curUser={curUser}>
          <Home curUser={curUser} users={users} handleLogOut={handleLogOut}/>
          </ProtectedRoute> }/>
        <Route path="/register" element={<Register register={register} isError={isError} setIsError={setIsError}/>}/>
        <Route path="/authorization" element={<Authorization authorization={authorization} isError={isError} setIsError={setIsError}/>}/>
        <Route path="*" element={<p>Page not found</p>}/>
      </Routes>
    </>
  )
}

export default App