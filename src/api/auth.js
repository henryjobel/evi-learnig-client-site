import axiosSecure from "."



export const saveUsers = async user=>{
    const currentUser={
        email:user.email,
        role:'student',
        status: 'Varified'

        
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}