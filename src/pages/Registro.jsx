import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Registro =()=>{
    return(
        <div className="d-flex justify-content-center  m-4">
      <Card style={{ width: "18rem" }} className="border-0">
        <Card.Img variant="top" src={logo} width="150" height="150" />
        <Card.Body>
          <Card.Title className="text-center">Ingresa tus datos</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
                <Form.Text className="text-muted">
                  No compartiremos tu correo con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="***********" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar mis datos" />
              </Form.Group>
              <div className="d-grid gap-2">
              <Button variant="dark" type="submit" className="btn-default" size="lg">
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