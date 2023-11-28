import { Helmet } from "react-helmet-async";
import AddCoursesForm from "../../Shared/AllForms/AddCourses/AddCoursesForm";
import useAuth from "../../../Hoocks/useAuth";
import { imageUpload } from "../../../api/utils";

const AddClass = () => {
    const {user} = useAuth()
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
        console.table(courseData)
    }
    
    return (
        <div>
            <Helmet>Dashboard || Add Class</Helmet>
            <AddCoursesForm handleSubmit = {handleSubmit}></AddCoursesForm>
        </div>
    );
};

export default AddClass;