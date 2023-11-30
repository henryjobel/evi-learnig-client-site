import axiosSecure from "."


export const createdPymanetIntent = async (price) =>{
    const {data} = await axiosSecure.post('/create-payment-intent',price )
    return data
}
export const enrolls = async paymentInfo =>{
    const { data } = await axiosSecure.post('/payments',paymentInfo)
    return data
}
// student
export const getMyClass = async (email) =>{
    const {data} = await axiosSecure(`/payments?email=${email}`)
    return data
}
// admin
export const mannageClass = async (email) =>{
    const {data} = await axiosSecure(`/payments/admin?email=${email}`)
    return data
}