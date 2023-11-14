import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default PrivateRoute;