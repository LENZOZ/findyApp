import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Home =()=>{
    return(
        <Container align="center">
        <div>
            <br></br>
            <h1>¡Bienvenido a Findy!</h1>
            <br></br>
            
        </div>
        </Container>
    );
}
export default Home;