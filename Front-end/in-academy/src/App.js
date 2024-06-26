import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { PathRouter } from './Router';

export default function App() {
  return (
    <BrowserRouter>
      <PathRouter/>
    </BrowserRouter>
  );
}

