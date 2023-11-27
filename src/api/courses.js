import axiosSecure from "."

export const getAllCourses = async () =>{
    const {data}= await axiosSecure('/courses')
    return data
}