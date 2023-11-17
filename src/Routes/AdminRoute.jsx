import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = (children) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default AdminRoute;