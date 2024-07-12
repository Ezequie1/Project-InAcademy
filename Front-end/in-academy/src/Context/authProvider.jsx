import React, { createContext, useEffect, useState } from 'react'
import { getUserWithContext } from '../Service'
import { Loading } from '../Components/Loading'

export const Context = createContext()

export function AuthProvider({ children }){
    const [ isAuthenticated, setAuthenticated ] = useState(false)
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function isLoged(){

            let token = localStorage.getItem('t')

            if(token){
                await getUserWithContext(token).then( res => {
                    setUser(res.data)
                    setAuthenticated(true)
                    setLoading(false)
                    
                }).catch(() => {
                    setAuthenticated(false)
                    setLoading(false)
                })
            }else{
                setLoading(false)
                setAuthenticated(false)
            }
        }

        isLoged()
    }, [])

    const logout = () => {
        localStorage.removeItem('t')
        setAuthenticated(false)
    }

    const login = () => {
        setAuthenticated(true)
    }

    if(loading){ return <Loading/> }

    return(
        <Context.Provider value={{ isUserAuth: isAuthenticated, userData: user, logout, login }}>
            { children }
        </Context.Provider>
    )
}