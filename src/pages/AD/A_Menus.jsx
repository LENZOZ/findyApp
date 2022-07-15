import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import TableInterna from "../../components/Graficas/TableInternaMenu";

export const A_menus =()=>{

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

      <Card style={{ width: "32rem" }} className="border-0">
        <Card.Body>
        <Navbar.Brand as={Link} to="/admin/menus"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">Nuevo Menu</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formMenus">
                    <p>Nombre</p>
                    <Form.Control type="email" placeholder="Menú" name="nombre" required ref = {nombreRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMenus">
                    <p>Descripcion</p>
                    <textarea class="form-control" id="descripcion" rows="3" placeholder="Descripcion" name="descripcion" required ref = {nombreRef}></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMenus">
                    <TableInterna />
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