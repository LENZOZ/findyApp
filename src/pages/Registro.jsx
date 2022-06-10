import React, { useEffect, useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Registro =()=>{

  const correoRef = useRef();
  const passRef = useRef();
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const rutRef = useRef();

  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('usuario');
    if(auth){
      navigate('/');
    }
    
  },[]);
  const handleSubmit= async()=>{
    //RECUPERO
    const correo = correoRef.current.value;
    const contrasenna = passRef.current.value;
    const nombre = nombreRef.current.value;
    const apellido = apellidoRef.current.value;
    const rut = rutRef.current.value;
    console.log(correo);
    console.log(contrasenna);
    console.log(nombre);
    console.log(apellido);
    console.log(rut);
    
    let result = await fetch ("http://localhost:3001/api/usuario/registro",{
      method:'POST',
      body: JSON.stringify({correo,contrasenna,nombre,apellido,rut}),
      headers: {
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
    localStorage.setItem('usuario', JSON.stringify(result));
    navigate('/');
  
      }

    return(
        <div className="d-flex justify-content-center  m-4">
      <Card style={{ width: "18rem" }} className="border-0">
        <Card.Img variant="top" src={logo} width="150" height="150" />
        <Card.Body>
          <Card.Title className="text-center">Ingresa tus datos</Card.Title>
          <Card.Text>

            <Form >

            <Form.Group className="mb-3" controlId="formBasicName">
                
                <Form.Control type="Text" placeholder="Nombre" name="nombre" required ref = {nombreRef}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                
                <Form.Control type="Text" placeholder="Apellido" name="apellido" required ref = {apellidoRef}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRut">
                
                <Form.Control type="Text" placeholder="RUT" name="rut" required ref = {rutRef}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Correo@xxx.cl" name="correo" required ref = {correoRef}/>
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Control type="password" placeholder="***********" required ref = {passRef}/>
                <Form.Text className="text-muted">
                  No compartiremos tu información con nadie.
                </Form.Text>
              </Form.Group>

              <div className="d-grid gap-2">
              <Button onClick={handleSubmit} variant="dark" type="button" className="btn-default" size="lg">
                Siguiente
              </Button>
              </div>
              
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
}
export default Registro;