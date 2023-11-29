
import useAuth from '../Hoocks/useAuth';

import useRole from '../Hoocks/useRole';
import Loader from './../Pages/Shared/Loader/Loader';

const AdminRoute = ({ children }) => {
    const {  loading } = useAuth();
    const [role] = useRole()
    

    if(loading){
        return <Loader></Loader>
    }

    if (role === 'admin') {
        return children;
    }
    
};

export default AdminRoute;