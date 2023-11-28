import { Helmet } from "react-helmet-async";
import AddCoursesForm from "../../Shared/AllForms/AddCourses/AddCoursesForm";
import useAuth from "../../../Hoocks/useAuth";
import { imageUpload } from "../../../api/utils";
import { useState } from "react";
import { addCourse } from "../../../api/courses";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";

const AddClass = () => {
    const {user} = useAuth()
    const [imageuplodtext, setImageuplodtext] = useState('Upload Image')
    const navigate = useNavigate()
    const handleSubmit = async e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const category = form.category.value
        const price = form.price.value
        const description = form.description.value
        const image = form.image.files[0]
        const teacher = {
            name : user?.displayName,
            photo: user?.photoURL,
            email: user?.email
        }
        const image_url = await imageUpload(image)
        const courseData = {
            title,
            category,
            price,
            description,
            teacher,
            image: image_url?.data?.display_url,
        }
        try{
            const data = await addCourse(courseData)
            console.log(data)
            toast.success('Courses Add Succesfully')
            navigate('/dashboard/myclass')

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
        console.table(courseData)
    }
    
    const handleUploadtext = image =>{
        setImageuplodtext(image.name)
    }

    return (
        <div>
            <Helmet>Dashboard || Add Class</Helmet>
            <AddCoursesForm
             handleSubmit = {handleSubmit}
             handleUploadtext = {handleUploadtext}
             imageuplodtext = {imageuplodtext}
             ></AddCoursesForm>
        </div>
    );
};

export default AddClass;