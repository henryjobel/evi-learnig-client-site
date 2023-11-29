
import useAuth from '../Hoocks/useAuth';

import useRole from '../Hoocks/useRole';
import Loader from './../Pages/Shared/Loader/Loader';

const StudentRoute = ({ children }) => {
    const {  loading } = useAuth();
    const [role] = useRole()
    

    if(loading){
        return <Loader></Loader>
    }

    if (role === 'student') {
        return children;
    }
    
};

export default StudentRoute;