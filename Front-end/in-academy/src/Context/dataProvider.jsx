import React, { createContext, useEffect, useState } from 'react'
import { getTopUsersRanking } from '../Service'

export const DataContext = createContext()

export function DataProviderContext({ children }){

    const [topUsersRanking, setTopUsersRanking] = useState([])

    useEffect(() => {
        function loadData(){
            getTopUsersRanking().then( res => {
                setTopUsersRanking(res.data)
            }).catch( err => {
                console.log("Erro ao carregar ranking de usuários!", err)
            })
        }

        loadData()
    }, [])


    return(
    <DataContext.Provider value={{ topUsersRanking }}>
        { children }
    </DataContext.Provider>
    )
}