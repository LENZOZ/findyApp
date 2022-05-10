import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// Componentes
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';

import NavBarHome from './components/navbar/navbar';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarHome/>}>
            <Route path='home' element={<Home/>} />
            <Route path='*' element={<Navigate replace to="/home"/>} />
            </Route>
            <Route path='login' element={<Login/>} />
            <Route path='registro' element={<Registro/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;

