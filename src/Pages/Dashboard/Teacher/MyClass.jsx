import { useState } from "react";
import useAuth from "../../../Hoocks/useAuth";
import { useEffect } from "react";
import { teacherCourse } from "../../../api/courses";
import MyClassesCard from "../../../Components/MyClassesCard/MyClassesCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const MyClass = () => {
    const [courses,setCourses] = useState([])
    const {user} = useAuth()
    useEffect(()=>{

        teacherCourse(user?.email)
        .then(data => {

            setCourses(data)
            console.log(data)
        })
    },[user])
    return (
        <div>
            <Helmet>My Class || Dashboard</Helmet>
            <SectionTitle heading={'My Class'}></SectionTitle>
            <div className="grid lg:grid-cols-4 gap-1">
            
            {
                courses.map(course => <MyClassesCard key={course._id} course={course}></MyClassesCard>)
            }
        </div>
        </div>
        
    );
};

export default MyClass;