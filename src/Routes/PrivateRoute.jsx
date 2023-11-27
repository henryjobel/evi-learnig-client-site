
import { Navigate, useLocation } from "react-router";

import useAuth from "../Hoocks/useAuth";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <progress className="w-56 progress"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace='true'></Navigate>
};

export default PrivateRoute;