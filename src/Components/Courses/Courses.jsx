import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Pages/Shared/Loader/Loader';


const Courses = () => {
    const [courses, setCourses] = useState([])
    const [params,SetParams] = useSearchParams()
    const category = params.get('category')
    const [loding,SetLoading] = useState(false)
   
    useEffect(()=>{
        SetLoading(true)
        fetch('/fakeData.json')
        .then(res => res.json())
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
        <div >
            {courses && courses.length>0 ? <div className='pt-20 pb-52 grid lg:grid-cols-4 container mx-auto gap-1' data-aos="zoom-in-up">
            {
                courses.map(course => 
                <CoursesCard
                     key={course.id} 
                     course={course}>

                </CoursesCard>)
            }
            </div> : 
            <div className='flex items-center justify-center min-h-[calc(100vh-300px)]' data-aos="zoom-in">
                <motion.div
      variants={allTextare}
      initial='initial'
      animate='animate'
      className='text-center pt-14 pb-10'
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