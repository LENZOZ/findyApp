import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_mesas =()=>{

  //Fecha actual
  const date = new Date();
  const date2 = (date.toISOString().split('T')[0]);
  const navigate = useNavigate();


  //Se Setean las referencias
  const mesaRef = useRef();
  const capRef = useRef();
  const sectorRef = useRef();
  
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
    const mesa = mesaRef.current.value;
    const cap = capRef.current.value;
    const sector = sectorRef.current.value;

    //Setting
    console.log(mesa);
    console.log(cap);
    console.log(sector);

    {/*Consulta a la base de datos*/}
    let result = await fetch ("https://api.findy.cl/api/mesas/registro",{
      method:'POST',
        body: JSON.stringify({mesa,cap,sector}),
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
        <Navbar.Brand as={Link} to="/admin/mesas"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">Nueva mesa</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Mesa</p>
                    <Form.Control type="number" placeholder="Numero" name="numero" required ref = {mesaRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Capacidad</p>
                    <Form.Control type="number" placeholder="1+" name="capacidad" required ref = {capRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Sector</p>
                    <Form.Select type="text" placeholder="Sector" name="sector" required ref={sectorRef}>
                      <option value="" selected disabled hidden>Eliga una opcion</option>
                      <option value="fumadores">Fumadores</option>
                      <option value="nofumadores">No Fumadores</option>
                    </Form.Select>
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