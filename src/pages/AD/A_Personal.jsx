import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_personal =()=>{

  //Fecha actual
  const date = new Date();
  const date2 = (date.toISOString().split('T')[0]);
  const navigate = useNavigate();


  //Se Setean las referencias
  const correoRef = useRef();
  const rutRef = useRef();
  const nombreRef = useRef();
  const fechaRef = useRef();
  const cargoRef = useRef();
  const telefonoRef = useRef();
  
  /*
  const correoRef = useRef();
  */

/*
  //Se verifica el usuario
  const navigate = useNavigate();
  useEffect(()=>{
    //CAMBIAR POR LA MESA
    const auth = localStorage.getItem('usuario');
    if(auth){
      navigate('/admin');
    }
  },[]);
  */
  const mesasSubmit= async()=>{

    
    //Getting
    const correo = correoRef.current.value;
    const rut = rutRef.current.value;
    const nombre = nombreRef.current.value;
    const fecha = fechaRef.current.value;
    const cargo = cargoRef.current.value;
    const telefono = telefonoRef.current.value;

    //Setting
    console.log(correo);
    console.log(rut);
    console.log(nombre);
    console.log(fecha);
    console.log(cargo);
    console.log(telefono);

    {/*Consulta a la base de datos*/}
    let result = await fetch ("https://api.findy.cl/api/mesas/registro",{
      method:'POST',
        body: JSON.stringify({correo,rut,nombre,fecha,cargo,telefono}),
      headers: {
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.warn(result)
    localStorage.setItem('mesas', JSON.stringify(result));
    navigate('/admin');


      }

    {/*Formulario*/}
    return(
        <div className="d-flex justify-content-center  m-4">
      <Card style={{ width: "24rem" }} className="border-0">
        <Card.Body>
        <Navbar.Brand as={Link} to="/admin/personal"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">Ingrese un nuevo trabajador</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Correo</p>
                    <Form.Control type="email" placeholder="Ingrese su correo" name="rut" required ref = {correoRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Rut</p>
                    <Form.Control type="number" placeholder="Sin punto ni guion" name="nMesa" required ref = {rutRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Nombre</p>
                    <Form.Control type="text" placeholder="Nombre" name="nPersonas" required ref = {nombreRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Fecha de nacimiento</p>
                    <Form.Control type="date" placeholder="fehca reserva" name="fReserva" max={date2} required ref = {fechaRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Cargo</p> 
                    <Form.Select type="text" placeholder="Cargo" name="Cargo" required ref={cargoRef}>
                      <option value="" selected disabled hidden>Eliga una opcion</option>
                      <option value="mesero">Mesero</option>
                      <option value="administrador">Administrador</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Telefono</p>
                    <Form.Control type="text" placeholder="+569XXXXXXXX" name="rut" required ref = {telefonoRef}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={mesasSubmit} variant="dark" type="button" size="lg" >
                    Agregar
                </Button>
                </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
}