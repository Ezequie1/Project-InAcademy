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