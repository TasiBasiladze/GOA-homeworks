import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, curUser }){
    if(Object.keys(curUser).length === 0){
        return <Navigate to="/authorization"/>
    }
    return children
}

export default ProtectedRoute;