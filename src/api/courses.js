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

// fetch clases for teacher
 export const teacherCourse = async (email) =>{
    const {data}= await axiosSecure(`/course/${email}`)
    return data
}


// save courses data in database
export const addCourse = async courseData =>{
    const {data}= await axiosSecure.post('/courses',courseData)
    return data
}

export const getAllFeedBack = async () =>{
    const {data}= await axiosSecure('/feedback')
    return data
}