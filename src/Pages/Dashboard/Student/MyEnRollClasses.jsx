import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getMyClass } from '../../../api/enroll';
import useAuth from './../../../Hoocks/useAuth';
import MyclassCard from './MyclassCard';

const MyEnRollClasses = () => {
    const {user} = useAuth()
    const {data: myclasses=[],refetch} = useQuery({
        queryKey:['myclasses', user?.email],
        queryFn: async ()=> await getMyClass(user?.email)
    })
    console.log(myclasses);
    return (
        <div className='grid grid-cols-3'>
            {
                myclasses.map(myclass => <MyclassCard key={myclass._id} myclass={myclass}></MyclassCard>)
            }
        </div>
    );
};

export default MyEnRollClasses;