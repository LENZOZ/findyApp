import React, { useEffect, useState, useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { SiAirtable } from "react-icons/si";
import { Col, Container, Row } from "react-bootstrap";
import './Reserva.css';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const API = "https://api.findy.cl/api";

export function get(path) {
  return fetch(API + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
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
            <Link
                to={"/mesa/" + mesa.id_Mesa}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                < SiAirtable color="green" className="mesa"/>
            </Link>
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
