import React, { useEffect, useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
/**
 * Represents a book.
 * @constructor
 * @param {string} correoRef - Rescata el valor ingresado en input del correo 
 */
const LoginAdmin = () => {
  //referencias
  const correoRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("usuario");
    console.log(auth);
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    //RECUPERO
    const correo = correoRef.current.value;
    const contrasenna = passRef.current.value;
    console.log(correo);
    console.log(contrasenna);
    //event.preventDefault();
    //direcciona a AHome
    /* if ((correo === 'admin@x.cl') && (pass ==='123')){
      navigate('/aHome');
    }

    if ((correo === 'user@x.cl') && (pass ==='123')){
      navigate('/uHome');
    }*/

    let result = await fetch("https://api.findy.cl/api/usuario/logina/", {
      method: "POST",
      body: JSON.stringify({ correo, contrasenna }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    //console.warn(result);
    if (result.Usuario_idUsuario) {
      localStorage.setItem("admin", JSON.stringify(result));
      navigate("/admin/");
    } else {
      alert("Por favor, ingresa los datos correctos");
    }
  };

  return (
    <div className="d-flex justify-content-center  m-4">
      <Card style={{ width: "18rem" }} className="border-0">
        <Card.Img variant="top" src={logo} width="150" height="150" />
        <Card.Body>
          <Card.Title className="text-center">Ingresa tus datos</Card.Title>
          <Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  ref={correoRef}
                />
                <Form.Text className="text-muted">
                  No compartiremos tu correo con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="***********"
                  ref={passRef}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar mis datos" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button
                  onClick={handleSubmit}
                  variant="dark"
                  type="button"
                  className="btn-default"
                  size="lg"
                >
                  Siguiente
                </Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default LoginAdmin;
