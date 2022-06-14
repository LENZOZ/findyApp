import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// Componentes
import Login from "./pages/Login";
import Registro from "./pages/Registro";

import NavBarHome from "./components/navbar/navbar";
import PrivateComponent from "./components/PrivateComponent";
import ListaLocales from "./components/ListaLocales";
import { LocalDetalle } from "./pages/Usuario/LocalDetalle";
import { Reserva } from "./pages/Usuario/Reserva";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ListaLocales/>} />
            <Route path="/salir" element={<h1>salir</h1>} />
            <Route path="/perfil" element={<h1>Mi Menú</h1>} />
            <Route exact path="/local/:localId" element={<LocalDetalle/>}/>
            <Route exact path="/reserva/:localId" element={<Reserva/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
