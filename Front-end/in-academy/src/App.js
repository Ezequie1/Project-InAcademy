import './App.css'
import { Routes, Route, BrowserRouter, useLocation, Navigate} from 'react-router-dom'
import { LoginPage } from './Pages/Auth'
import { Header } from './Components/Header';
import { HomePage } from './Pages/Home';
import { Forward } from '@mui/icons-material';

export default function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>  
  );
}

function AppContent(){
  const location = useLocation();
  const isAuthPath = location.pathname === '/auth'

  return(
    <>
      { !isAuthPath && <Header/> }
      <Routes>
        <Route path="/auth" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/meu-aprendizado" element={'Meu aprendizado'}/>
        <Route path="/comunidades" element={'Comunidades'}/>
        <Route path="/todos-os-cursos" element={'Todos os cursos'}/>
        <Route path="/membros" element={'Membros'}/>
        <Route path="/ranking" element={'Ranking'}/>
        <Route path="/notificacoes" element={'Notificacoes'}/>
        <Route path="/configuracoes" element={'Configuracoes'}/>
        <Route path="/suporte" element={'Suporte'}/>
        <Route path="*" element={<Navigate to='/auth'/>}/>
      </Routes>
    </>

  )
}

