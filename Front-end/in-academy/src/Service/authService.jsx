import { api } from '../static/variables'

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