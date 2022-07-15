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
            <Link  to="/loginAdmin" align="left">
            <Button
            
                  link to=""
                  variant="dark"
                  type="button"
                  className="btn-default"
                  size="lg"
                >
                  Iniciar sesión como administrador
                </Button>
          </Link>
            
            
        </div>
        </Container>
    );
}
export default Home;