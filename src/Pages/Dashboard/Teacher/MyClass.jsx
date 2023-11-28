import { useState } from "react";
import useAuth from "../../../Hoocks/useAuth";
import { useEffect } from "react";
import { teacherCourse } from "../../../api/courses";
import MyClassesCard from "../../../Components/MyClassesCard/MyClassesCard";


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
        <div className="grid lg:grid-cols-4 gap-1">
            {
                courses.map(course => <MyClassesCard key={course._id} course={course}></MyClassesCard>)
            }
        </div>
    );
};

export default MyClass;