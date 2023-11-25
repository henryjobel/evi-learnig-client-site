import React from 'react';
import Courses from '../../Components/Courses/Courses';
import Categoris from '../../Components/Courses/Categoris/Categoris';


const AllClass = () => {
    return (
        <div className='bg-slate-800'>
            <Categoris></Categoris>
            <Courses></Courses>
        </div>
    );
};

export default AllClass;