import useAuth from './useAuth';
import { studentGetRole } from '../api/auth';
import { useQuery } from '@tanstack/react-query';

const useRole = () =>{
    const {user,loading} = useAuth()
    const {data: role } = useQuery({
         
        queryFn: async ()=> await studentGetRole(user?.email),
        queryKey:['role'],
    })
    return [role]
}



export default useRole