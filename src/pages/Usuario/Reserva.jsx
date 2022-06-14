import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SiAirtable } from "react-icons/si";
import { Col, Container, Row } from "react-bootstrap";
import './Reserva.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const API = "http://localhost:3001/api";

export function get(path) {
  return fetch(API + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
}


export function BtnReservar(props) {

    const handleSubmit = async (props) => {
        //RECUPERO
        const mesa= props.mesa.mesa_id;
    
        let result = await fetch("http://localhost:3001/mesa", {
          method: "POST",
          body: JSON.stringify({ mesa}),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        //console.warn(result);
        if (result.mesa_id) {
          Navigate("/");
        } else {
          alert("Por favor, ingresa los datos correctos");
        }
      };


    const [show, setShow] = useState(false);
    const target = useRef(null);
    const pepe = 1;
    const m = props.m;
    return (
      <>
      
        <div ref={target} onClick={() => setShow(!show)}>
        < SiAirtable color="green" className="mesa" />
        </div>
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-reserva" {...props}>
              Capacidad: {m.capacidad}
              <br></br>
              <br></br>
              
              <Button variant="outline-warning" onClick={handleSubmit}>Reservar</Button>
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }


export function Reserva () {
  const { localId } = useParams();
  const [mesas, setMesas] = useState();


  useEffect(() => {
    get("/mesa/" + localId).then((data) => {
      setMesas(data);
    });
  }, [localId]);

  if (!mesas) {
    return null;
  }

  return (
<div align="center">
    <br></br>
    <h1>Selecciona tu mesa</h1>
    <br></br>
    <div className="ajustado">
<Container align = "center">
    <Row>
      {mesas.map((mesa) => (
        
        <Col xs={4}>
        {(mesa.Estado_id_Estado===1) ? (
            <>
          < SiAirtable color="red" className="mesa"/>
          </>
            ) : (
            <>
          <BtnReservar m={mesa}/>
          </>

            )}
        </Col>
        
      ))}
    </Row>


    
</Container>
    </div>
    </div>
  );
  
}
