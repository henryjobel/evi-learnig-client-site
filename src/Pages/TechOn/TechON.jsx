import React, { useState } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link } from 'react-router-dom';

import useAuth from '../../Hoocks/useAuth';
import TeacherRequstMOdal from '../Dashboard/Teacher/TeacherRequstModal';
import { becomeTeacher } from '../../api/auth';
import toast from 'react-hot-toast';

const TechON = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useAuth()
    const closeModal = ()=>{
        setIsOpen(false)
    }
    const modalHandler = async () =>{
        try{
        const data = await becomeTeacher(user?.email)
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success('Requsted Sucess Fully Send Wait for the Admin to Confermation ')
        }
        else{
            toast.error('Already Send requst wait for Admin to confermation')
        }
            
            console.log(data)
        }
        catch(error){
            console.log(error.message);
        }
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 pt-40">
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                Become a
                <span className="font-bold text-blue-500">Teacher</span>
                <span className="text-xl font-semibold rounded-full text-blueGray-500"></span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Are you passionate about a particular subject or skill? Do you have expertise you love to share with eager learners? Join our community of educators and become a teacher on Evo Learn
            </p>
            <div className="mt-5 sm:flex md:mt-8">
                <div className="rounded-md shadow"><a href=""
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        <Link to='/login'>Getting started</Link>
                    </a></div>
                <div>
                    <button onClick={()=> setIsOpen(true)} className='btn btn-success'> Requste Be Teacher Click Here</button>
                    
                </div>
                <TeacherRequstMOdal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler}></TeacherRequstMOdal>
            </div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
                <img src="https://picsum.photos/400/300" />
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default TechON;