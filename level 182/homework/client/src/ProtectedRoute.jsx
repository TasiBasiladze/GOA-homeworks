import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, curUser }) => {
    
    if (!curUser || Object.keys(curUser).length === 0) {
        return <Navigate to="/authorization" />;
    }

    return children;
}

export default ProtectedRoute;