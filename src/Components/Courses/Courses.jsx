import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Pages/Shared/Loader/Loader';
import { getAllCourses } from '../../api/courses';


const Courses = () => {
    const [courses, setCourses] = useState([])
    const [params,SetParams] = useSearchParams()
    const category = params.get('category')
    const [loding,SetLoading] = useState(false)
   
    useEffect(()=>{
        SetLoading(true)
        getAllCourses()
        .then(data =>{
            
            if(category){
                const filteredCta = data.filter(courses => courses.category === category)
                setCourses(filteredCta)
            }
            else setCourses(data)


            SetLoading(false)
        })
    },[category])

    

    const allTextare = {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      };
    
      const wordsAre = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };
    
      const text = 'Opps Sorry!  Courses are Not Aviable At the moment';
      if(loding)return<Loader></Loader>
    return (
        <div data-aos="zoom-in">
            {courses && courses.length>0 ? <div className='container grid gap-1 pt-20 mx-auto pb-52 lg:grid-cols-4' data-aos="zoom-in-up">
            {
                courses.map(course => 
                <CoursesCard
                     key={course._id} 
                     course={course}>

                </CoursesCard>)
            }
            </div> : 
            <div className='flex items-center justify-center min-h-[calc(100vh-300px)]' data-aos="zoom-in">
                <motion.div
      variants={allTextare}
      initial='initial'
      animate='animate'
      className='pb-10 text-center pt-14'
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={wordsAre} className={`text-4xl font-bold text-white ${char === ' ' ? 'ml-1' : ''}`}>
          {char}
        </motion.span>
      ))}
      <motion.p variants={wordsAre} className='text-2xl text-white'>
        Please Try to Browses Another one,
      </motion.p>
    </motion.div>
            </div>
                }
        </div>
    );
};

export default Courses;