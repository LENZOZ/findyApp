import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_promociones =()=>{

  //Fecha actual
  const date = new Date();
  const date2 = (date.toISOString().split('T')[0]);
  const navigate = useNavigate();


  //Se Setean las referencias
  const nombreRef = useRef();
  const desRef = useRef();
  const prodRef = useRef();
  const precioRef = useRef();
  const imgRef = useRef();
  const fInicioRef = useRef();
  const fTerminoRef = useRef();
    
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
    const nombre = nombreRef.current.value;
    const des = desRef.current.value;
    const prod = prodRef.current.value;
    const precio = precioRef.current.value;
    const img = imgRef.current.value;
    const fInicio = fInicioRef.current.value;
    const fTermino = fTerminoRef.current.value;

    //Setting
    console.log(nombre);
    console.log(des);
    console.log(prod);
    console.log(precio);
    console.log(img);
    console.log(fInicio);
    console.log(fTermino);

    {/*Consulta a la base de datos*/}
    let result = await fetch ("https://api.findy.cl/api/mesas/registro",{
      method:'POST',
        body: JSON.stringify({nombre,des,prod,precio,img,fInicio,fTermino}),
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
      <Card style={{ width: "28rem" }} className="border-0">
        <Card.Body>
        <Navbar.Brand as={Link} to="/admin/promociones"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">**Nueva Promocion**</Card.Title>
          <Card.Text>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Nombre</p>
                    <Form.Control type="text" placeholder="Nombre" name="nPersonas" required ref = {nombreRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Descripcion</p>
                    <Form.Control type="text" placeholder="Nombre" name="descripcion" required ref = {desRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Producto</p>
                    <Form.Control type="text" placeholder="Producto" name="producto" required ref = {prodRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Precio</p>
                    <Form.Control type="number" placeholder="$0"  name="stock" min="0" step="1000" required ref = {precioRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Subir imagen promocional</p>
                    <Form.Control type="file" placeholder="img" name="img" required ref = {imgRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Fecha de inicio</p>
                    <Form.Control type="date" placeholder="fehca inicio" name="finicio" min={date2} required ref = {fInicioRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Fecha de termino</p>
                    <Form.Control type="date" placeholder="fehca termino" name="ftermino" min={date2} required ref = {fTerminoRef}/>
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