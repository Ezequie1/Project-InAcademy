import { api } from '../static/variables'

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

export async function searchCourse(query){
    let token = localStorage.getItem('t')

    return await api.get(
        '/course/search/' + query,
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function getFavoritesCourses(){
    let token = localStorage.getItem('t')

    return await api.get(
        '/favorites/all',
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function favoriteCourse(courseId){
    let token = localStorage.getItem('t')

    return await api.post(
        '/favorites/add/' + courseId,
        {},
        { headers: { Authorization: `Bearer ${token}` }}
    )
}

export async function removeFavorite(courseId){
    let token = localStorage.getItem('t')

    return await api.put(
        '/favorites/remove/' + courseId,
        {},
        { headers: { Authorization: `Bearer ${token}` }}
    )
}