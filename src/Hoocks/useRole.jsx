
import { useState } from 'react';
import useAuth from './useAuth';
import { useEffect } from 'react';
import { studentGetRole } from '../api/auth';

const useRole = () =>{
    const {user} = useAuth()
    const [role,setRole] = useState(null)
    useEffect(()=>{
        studentGetRole(user?.email)
        .then(data => {
            setRole(data)
        })
    },[user])

    return [role]
}



export default useRole