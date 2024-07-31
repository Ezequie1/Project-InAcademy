import React, { createContext, useEffect, useState } from 'react'
import { getAllCoursesEnrolled, getAllRecentlyAddedCourses, getTopUsersRanking, getCoursesByCategory, getAllCourses} from '../Service'

export const DataContext = createContext()

export function DataProviderContext({ children }){

    const [topUsersRanking, setTopUsersRanking] = useState([])
    const [inProgressCourses, setInProgressCourses] = useState([])
    const [recentlyAddedCourses, setRecentlyAddedCourses] = useState([])
    const [coursesByCategory, setCoursesByCategory] = useState([])
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        function loadData(){
            getAllCoursesEnrolled().then( res => setInProgressCourses(res.data))

            getAllRecentlyAddedCourses().then( res => setRecentlyAddedCourses(res.data))

            getCoursesByCategory().then( res => setCoursesByCategory(res.data))

            getAllCourses().then( res => setAllCourses(res.data))

            getTopUsersRanking().then( res => setTopUsersRanking(res.data))
        }

        loadData()
    }, [])


    return(
    <DataContext.Provider value={{ topUsersRanking, inProgressCourses, recentlyAddedCourses, coursesByCategory, allCourses}}>
        { children }
    </DataContext.Provider>
    )
}