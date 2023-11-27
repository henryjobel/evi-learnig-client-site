import axios from "axios"

export const imageUpload = async image => {

    const formData = new FormData()
    formData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=cf52dd5af743485abc9d278c6875e924`, formData)

    return data

}