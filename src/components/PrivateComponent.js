import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () =>{
    const auth = localStorage.getItem('usuario');

    return auth ?<Outlet/>:<Navigate to='home'/>
}

export default PrivateComponent;