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