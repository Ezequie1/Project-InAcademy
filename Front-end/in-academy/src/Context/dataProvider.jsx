import { getAllCoursesEnrolled, getAllRecentlyAddedCourses, getCoursesByCategory, getAllCourses, getFavoritesCourses} from '../Service/courseService'
import React, { createContext, useState } from 'react'
import { getTopUsersRanking } from '../Service/userService'

export const DataContext = createContext()

export function DataProviderContext({ children }){

    const [topUsersRanking, setTopUsersRanking] = useState([])
    const [inProgressCourses, setInProgressCourses] = useState([])
    const [recentlyAddedCourses, setRecentlyAddedCourses] = useState([])
    const [coursesByCategory, setCoursesByCategory] = useState([])
    const [allCourses, setAllCourses] = useState([])
    const [favoritesCourses, setFavoritesCourses] = useState([])

    const loadAllData = () => {
        getAllCoursesEnrolled().then( res => setInProgressCourses(res.data))

        getFavoritesCourses().then( res => setFavoritesCourses(res.data))

        getAllRecentlyAddedCourses().then( res => setRecentlyAddedCourses(res.data))

        getCoursesByCategory().then( res => setCoursesByCategory(res.data))

        getAllCourses().then( res => setAllCourses(res.data))

        getTopUsersRanking().then( res => setTopUsersRanking(res.data))
    }

    return(
        <DataContext.Provider value={{ topUsersRanking, favoritesCourses, inProgressCourses, recentlyAddedCourses, coursesByCategory, allCourses, loadAllData}}>
            { children }
        </DataContext.Provider>
    )
}