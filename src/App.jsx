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
import { Dash } from "./pages/AD/Dash";
import { Reservas } from "./pages/AD/Reservas";
import { A_reservas } from "./pages/AD/A_Reservas";
import { Personal } from "./pages/AD/Personal";
import { A_personal } from "./pages/AD/A_Personal";
import { Productos } from "./pages/AD/Productos";
import { A_productos } from "./pages/AD/A_Productos";
import { Menus } from "./pages/AD/Menus";
import { Mesas } from "./pages/AD/Mesas";
import { Local } from "./pages/AD/Local";
import { Promociones } from "./pages/AD/Promociones";
import { A_menus } from "./pages/AD/A_Menus";
import { A_mesas } from "./pages/AD/A_Mesas";
import { A_promociones } from "./pages/AD/A_Promociones";




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

          <Route path="/admin/" element={<Dash />} />
          <Route path="/admin/reservas/" element={<Reservas />} />
          <Route path="/admin/reservas/agregar" element={<A_reservas />} />
          <Route path="/admin/personal" element={<Personal />} />
          <Route path="/admin/personal/agregar" element={<A_personal />} />
          <Route path="/admin/productos" element={<Productos />} />
          <Route path="/admin/productos/agregar" element={<A_productos />} />
          <Route path="/admin/personal" element={<Personal />} />
          <Route path="/admin/menus" element={<Menus />} />
          <Route path="/admin/menus/agregar" element={<A_menus/>} />
          <Route path="/admin/mesas" element={<Mesas />} />
          <Route path="/admin/mesas/agregar" element={<A_mesas />} />
          <Route path="/admin/local" element={<Local />} />
          <Route path="/admin/promociones" element={<Promociones />} />
          <Route exact path="/admin/promociones/:localId" element={<Promociones />} />
          <Route path="/admin/promociones/agregar" element={<A_promociones />} />


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
