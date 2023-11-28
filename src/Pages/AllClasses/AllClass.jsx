import React from 'react';
import Courses from '../../Components/Courses/Courses';
import Categoris from '../../Components/Courses/Categoris/Categoris';
import NavBar from '../Shared/NavBar/NavBar';


const AllClass = () => {
    return (
        <div className='bg-slate-800'>
            <NavBar></NavBar>
            <Categoris></Categoris>
            <Courses></Courses>
        </div>
    );
};

export default AllClass;