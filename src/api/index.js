import axios from "axios";
import { clearToken } from "./auth";



const axiosSecure = axios.create({
    baseURL: 'https://evo-learn-server-site.vercel.app/',
    withCredentials: true
})

axiosSecure.interceptors.response.use(response => response,async (error)=>{
    console.log('error from interseptors',error.response)
    if(error.response && 
        error.response.status === 401 || error.response.status === 403){
            await clearToken()
            window.location.replace('/login')
        }

        return Promise.reject(error)
})


export default axiosSecure