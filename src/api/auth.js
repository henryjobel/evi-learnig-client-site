import axiosSecure from "."
// save user data in mongodb
export const saveUsers = async user=>{
    const currentUser={
        email:user.email,
        role:'student',
        status: 'Varified'

        
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}

// get token from server

export const getToken = async email =>{
    const {data} = await axiosSecure.post(`/jwt`, email)
    console.log('tokens are recived from server')
    return data
}
// clear cokis
export const clearToken = async () =>{
    const {data} = await axiosSecure.get('/logout')
    return data
}

// get student role from dashboard
export const studentGetRole = async (email) =>{
    const {data}= await axiosSecure(`/user/${email}`)
    return data.role
    
}
// get all users
export const getAllUsers = async () =>{
    const {data}= await axiosSecure(`/users`)
    return data
    
}
export const getstates = async () =>{
    const {data}= await axiosSecure(`/admin-stats`)
    return data
    
}
export const purchesStates = async () =>{
    const {data}= await axiosSecure(`/order-stats`)
    return data
    
}


export const updateUsers = async ({email,role}) =>{
    const currentUser={
        email,role,
        status: 'Verified'

        
    }
    const {data} = await axiosSecure.put(`/users/update/${email}`, currentUser)
    return data
}

// becom a teacher
export const becomeTeacher = async email =>{
    const currentUser = {
        email,
        status: 'Requsted'
    }
    const {data} = await axiosSecure.put(`/users/${email}`, currentUser)
    return data
}
