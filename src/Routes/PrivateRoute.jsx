
import { Navigate, useLocation } from "react-router";

import useAuth from "../Hoocks/useAuth";
import Loader from "../Pages/Shared/Loader/Loader";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace='true'></Navigate>
};

export default PrivateRoute;