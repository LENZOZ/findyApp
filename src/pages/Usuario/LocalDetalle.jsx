import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const API = "http://localhost:3001/api";

export function get(path) {
  return fetch(API + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
}


export function LocalDetalle() {
  const { localId } = useParams();
  const [Productos, setProductos] = useState([]);
  const [local, setLocal] = useState();

  useEffect(() => {
    get("/local/" + localId).then((data) => {
      setLocal(data);
    
    });

    get("/producto/" + localId).then((data) => {
      setProductos(data);
    
    });

  }, [localId]);

  


  if (!local) {
    return null;
  }

  const imageUrl = local.ruta_imagen;
  return (
      
    <div >
        <br></br>
        <Container   align="center">
      <Card  style={{ width:'20rem', border:'none' }}>
        <Card.Img variant="top" src={imageUrl} bsPrefix />
        <Card.Body>
          <Card.Title>{local.nombre}</Card.Title>
          <Card.Text>Ubicacion: {local.ubicacion}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Container>

        <h3>Carta:</h3>
      {Productos.map((producto) => (
        
        <p>{producto.nombre}:${producto.precio}</p>
        
    ))}


    </div>
  );
}