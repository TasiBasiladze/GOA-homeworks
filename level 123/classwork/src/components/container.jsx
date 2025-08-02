import { useState } from "react";
import Presentational from "./presentational";

function Container(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    return <Presentational name={name} password={password} handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange} />
}
export default Container;