import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_reservas =()=>{

  //Se Setean las referencias
  const nMesaRef = useRef();
  const rutRef = useRef();
  const fReservaRef = useRef();
  const nPersonasRef = useRef();
  //Fecha actual
  const date = new Date();
  const date2 = (date.toISOString().split('T')[0]);

  const navigate = useNavigate();

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
    const nMesa = nMesaRef.current.value;
    const rut = rutRef.current.value;
    const fReserva = fReservaRef.current.value;
    const nPersonas = nPersonasRef.current.value;


    /*
    const correo = correoRef.current.value;
    */

    //Setting
    console.log(nMesa);
    console.log(rut);
    console.log(fReserva);
    console.log(nPersonas);

    /*
    console.log(correo);
    */


    {/*Consulta a la base de datos*/}
    let result = await fetch ("https://api.findy.cl/api/mesas/registro",{
      method:'POST',
        body: JSON.stringify({nMesa,rut,fReserva}),
      //body: JSON.stringify({correo,contrasenna,nombre,apellido,rut}),
      headers: {
        'Content-Type':'application/json'
      }
    });

    result = await result.json();
    console.warn(result)
    localStorage.setItem('mesas', JSON.stringify(result));
    //Redireccionamiento
    navigate('/admin');
      }

    {/*Formulario*/}
    return(
        <div className="d-flex justify-content-center  m-4">
      <Card style={{ width: "24rem" }} className="border-0">
        <Card.Body>
        <Navbar.Brand as={Link} to="/admin/reservas"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">Nueva Reserva :D</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Mesa</p>
                    <Form.Control type="number" placeholder="Numero" name="nMesa" required ref = {nMesaRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Personas</p>
                    <Form.Control type="number" placeholder="Cantidad" name="nPersonas" required ref = {nPersonasRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Rut cliente</p>
                    <Form.Control type="text" placeholder="Sin punto o guion" name="rut" required ref = {rutRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Fecha de reseva</p>
                    <Form.Control type="date" placeholder="fehca reserva" name="fReserva" min={date2} required ref = {fReservaRef}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={mesasSubmit} variant="dark" type="button" size="lg" >
                    Agregar
                </Button>
                </div>
            </Form>


            {/*
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
                <Form.Control type="email" placeholder="Correo@xxx.cl" name="correo" required ref = {nMesaRef}/>
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
            */}

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
}