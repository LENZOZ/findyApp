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
import { Mesa } from "./pages/Usuario/Mesa";
import { MisReservas } from "./pages/Usuario/MisReservas";
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ListaLocales/>} />
            <Route path="/salir" element={<h1>Salir</h1>} />
            <Route path="/MisReservas" element={<MisReservas/>} />
            <Route exact path="/local/:localId" element={<LocalDetalle/>}/>
            <Route exact path="/reserva/:localId" element={<Reserva/>}/>
            <Route exact path="/mesa/:mesaId" element={<Mesa/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
