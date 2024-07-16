import axios from "axios"

const api = axios.create({
    baseURL : 'http://localhost:8080'
})

export async function sign(requestObject){
    return await api.post(
        '/auth/login',
        requestObject
    )
}

export async function register(requestObject){
    return await api.post(
        '/auth/register',
        requestObject
    )
}

export async function getUserWithContext(token){
    return await api.get(
        '/auth/getUser',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function setImageUser(token, imageData){
    return await api.post(
        '/user/image',
        imageData,
        { 
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${ imageData._boundary }`,
                Authorization: `Bearer ${token}` 
            }
        }
    )
}