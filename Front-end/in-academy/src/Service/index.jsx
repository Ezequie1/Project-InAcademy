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

export async function getAllCoursesEnrolled(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/enrollments/courses',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function getAllRecentlyAddedCourses(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/course/recently',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function getCoursesByCategory(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/course/category/TECHNOLOGY',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function getAllCourses(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/course',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

