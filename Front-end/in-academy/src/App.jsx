import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom'
import { DataProviderContext } from './Context/dataProvider'
import { ContextConfig } from './Context/configProvider'
import { AuthProvider } from './Context/authProvider'
import { Context } from './Context/authProvider'
import { UserConfigPage } from './Pages/Config'
import { SupportPage } from './Pages/Support'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { LoginPage } from './Pages/Auth'
import { HomePage } from './Pages/Home'
import { useContext } from 'react'
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <ContextConfig>
        <DataProviderContext>
          <BrowserRouter>
            <AppContent/>
          </BrowserRouter> 
        </DataProviderContext>
      </ContextConfig>
    </AuthProvider>
  )
}

function AppContent(){
  const location = useLocation()
  const isAuthPath = location.pathname === '/auth'
  
  return(
    <>
      { !isAuthPath && <Header/> }
      <Routes>
        <Route path="/auth" element={<AuthRoute><LoginPage/></AuthRoute>}/>
        <Route path="/home" element={<PrivateRoute><HomePage/></PrivateRoute>}/> 
        <Route path="/meu-aprendizado/*" element={<PrivateRoute>Meu aprendizado</PrivateRoute>}/>
        <Route path="/comunidades/*" element={<PrivateRoute>Comunidades</PrivateRoute>}/>
        <Route path="/todos-os-cursos/*" element={<PrivateRoute>Todos os cursos</PrivateRoute>}/>
        <Route path="/membros/*" element={<PrivateRoute>Membros</PrivateRoute>}/>
        <Route path="/ranking/*" element={<PrivateRoute>Ranking</PrivateRoute>}/>
        <Route path="/notificacoes/*" element={<PrivateRoute>Notificacoes</PrivateRoute>}/>
        <Route path="/configuracoes" element={<PrivateRoute><UserConfigPage/></PrivateRoute>}/>
        <Route path="/suporte" element={<PrivateRoute><SupportPage/></PrivateRoute>}/>
        <Route path="*" element={<Navigate to='/auth'/>}/>
      </Routes>
      { !isAuthPath && <Footer/> }
    </>
  )
}

const PrivateRoute = ({ children }) => {
  const { isUserAuth } = useContext(Context)

  return isUserAuth ? children : <Navigate to='/auth'/>
}

const AuthRoute = ({ children }) => {
  const { isUserAuth } = useContext(Context)

  return !isUserAuth ? children : <Navigate to='/home'/>
}

