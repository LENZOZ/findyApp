import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () =>{
    const auth = localStorage.getItem('usuario');
    const authA = localStorage.getItem('admin');

    return (auth || authA) ?<Outlet/>:<Navigate to='home'/>
}

export default PrivateComponent;