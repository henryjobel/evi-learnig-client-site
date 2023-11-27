import axiosSecure from "."
// fetch all data from db
export const getAllCourses = async () =>{
    const {data}= await axiosSecure('/courses')
    return data
}

// fetch single data from db

export const singleCourse = async id =>{
    const {data}= await axiosSecure(`/courses/${id}`)
    return data
}