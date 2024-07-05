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

export async function isAuthenticated(){
    const token = localStorage.getItem('t')

    if(token === null || token === '') return false

    return await axios.get(
        'http://localhost:8080/auth/isAuthenticated',
        { headers: { Authorization: token }}
    )
}