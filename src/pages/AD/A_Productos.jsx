import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const A_productos =()=>{

  //Fecha actual
  const date = new Date();
  const date2 = (date.toISOString().split('T')[0]);
  const navigate = useNavigate();


  //Se Setean las referencias
  const nombreRef = useRef();
  const tipoRef = useRef();
  const stockRef = useRef();
  const precioRef = useRef();
  
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
  const productoSubmit= async()=>{

    
    //Getting
    const nombre = nombreRef.current.value;
    const tipo = tipoRef.current.value;
    const stock = stockRef.current.value;
    const precio = precioRef.current.value;

    //Setting
    console.log(nombre);
    console.log(tipo);
    console.log(stock);
    console.log(precio);

    {/*Consulta a la base de datos*/}
    let result = await fetch ("https://api.findy.cl/api/mesas/registro",{
      method:'POST',
        body: JSON.stringify({nombre,tipo,stock,precio}),
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
      <Card style={{ width: "18rem" }} className="border-0">
        <Card.Body>
        <Navbar.Brand as={Link} to="/admin/productos"><AiIcons.AiOutlineArrowLeft /></Navbar.Brand>
          <Card.Title className="text-center">Nuevo producto</Card.Title>
          <Card.Text>
            <Form>
                  <Form.Group className="mb-3" controlId="formBasicMesa">
                      <p>Nombre</p>
                      <Form.Control type="text" placeholder="Nombre" name="nombre" required ref = {nombreRef}/>
                  </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Tipo de producto</p> 
                    <Form.Control type="text" placeholder="Categoria" name="categoria" required ref = {tipoRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMesa">
                    <p>Stock</p>
                    <Form.Control type="number" placeholder="0+"  name="stock" required ref = {stockRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRut">
                    <p>Precio</p>
                    <Form.Control type="number" placeholder="$0"  name="stock" min="0" step="1000" required ref = {precioRef}/>
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={productoSubmit} variant="dark" type="button" size="lg" >
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