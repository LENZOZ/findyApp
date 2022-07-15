import { Fragment, useEffect, useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function Mesa (){
  const { mesaId } = useParams();
  const auth = localStorage.getItem("usuario");
  const [caracteristicas, setCaracteristicas] = useState([]);
  const dateRef = useRef();

  useEffect(() => {
    getLocales();
  }, []);

  const handleSubmit = async () =>{
    const fecha=dateRef.current.value;
    let id = JSON.parse(auth).id_usuario;

    let result = await fetch("http://localhost:3001/api/mesa", {
      method: "POST",
      body: JSON.stringify({ id, mesaId,fecha}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Reserva exitosa");
    result = await result.json();
    console.warn(fecha);
  }

  const getLocales = async () => {
   
    let result = await fetch("http://localhost:3001/api/caracteristica/"+mesaId);
    result = await result.json();
    setCaracteristicas(result);
  };
  

    return(
        <Container align="center">
            <br></br><br></br>
            <h3>Información de la mesa</h3>
            <br></br><br></br>
            {caracteristicas.map((car) => (
            <h4>{car.caracteristica}</h4>
            ))}
            <br></br><br></br>
            <TextField
        id="datetime-local"
        label="Selecciona fecha y hora"
        type="datetime-local"
        inputRef={dateRef}
        
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

          <br></br><br></br>
          <Button variant="dark" size="lg" onClick={handleSubmit}>
            RESERVAR
          </Button>
        </Container>
    );
}