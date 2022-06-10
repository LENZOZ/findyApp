import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBarHome from "../components/navbar/navbar";

const Home =()=>{
    return(
        <div>
            <BrowserRouter>
            <NavBarHome/>
            <h1>Home</h1>
            </BrowserRouter>
        </div>
    );
}
export default Home;