import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './Pages/Auth'
import { PrincipalPage } from './Pages/Principal'

export function PathRouter(){
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<PrincipalPage/>}/>
            <Route path="*" element={<LoginPage/>}/>
        </Routes>
    )
}