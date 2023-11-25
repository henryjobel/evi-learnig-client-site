import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>{
            setCourses(data)
        })
    },[])
    return (
        <div className='pt-40 grid lg:grid-cols-4 container mx-auto gap-1'>
            {
                courses.map(course => 
                <CoursesCard
                     key={course.id} 
                     course={course}>

                </CoursesCard>)
            }
        </div>
    );
};

export default Courses;