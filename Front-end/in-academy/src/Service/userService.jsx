import { api } from '../static/variables'

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

export async function changeOffice(office){
    let token = localStorage.getItem('t')

    return await api.put(
        '/user/office',
        { office: office },
        { headers: { Authorization: `Bearer ${ token }` }}
    )
}

export async function getTopUsersRanking(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/user/ranking',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function setStatusIsOnlineTrue(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/user/online/true',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function setStatusIsOnlineFalse(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/user/online/false',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}