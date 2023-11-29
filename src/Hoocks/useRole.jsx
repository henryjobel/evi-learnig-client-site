
import { useState } from 'react';
import useAuth from './useAuth';
import { useEffect } from 'react';
import { studentGetRole } from '../api/auth';

const useRole = () =>{
    const {user,loading} = useAuth()
    const [role,setRole] = useState(null)
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
        
        studentGetRole(user?.email)
        .then(data => {
            setRole(data)
            setLoader(false)
        })
    },[user])

    return [role, loading]
}



export default useRole