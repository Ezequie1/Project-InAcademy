import React, { createContext, useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'

export const ConfigContext = createContext()

export function ContextConfig({ children }){
    const element = document.querySelector('body')
    const [theme, setTheme] = useState('light')
    const [snack, setSnack] = useState({
        open: false,
        message: ''
    })

    const changeTheme = (to) => {
        if(to === 'dark'){
            element.setAttribute('data-theme', 'dark')
            setTheme('dark')
        }else{
            element.setAttribute('data-theme', 'light')
            setTheme('light')
        }            
    }

    useEffect(() => {
        function getTheme(){
            element.getAttribute('data-theme') === null ? 
                setTheme('light'):
                setTheme('dark') 
        }

        getTheme()
    }, [])


    return(
        <ConfigContext.Provider value={{ theme, changeTheme, setSnack }}>
            { children }    
            <Snackbar
                open={ snack.open }
                autoHideDuration={ 3000 }
                onClose={() => setSnack({...snack, open: false})}
                message={ snack.message }
            />
        </ConfigContext.Provider>
    )
}