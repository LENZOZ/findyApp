import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React, { Component } from 'react';
import { Loader } from '@googlemaps/js-api-loader';


const API = "https://api.findy.cl/api";

const loader = new Loader({
  apiKey: "AIzaSyA0hhQQOW8VPRgQ42EecqdSyvH3lPfRmT8",
  version: "weekly",
  libraries: ["places"]
});



export function get(path) {
  return fetch(API + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
}


export default class DemoComponent extends Component {

  



  constructor(props) {
      super(props);
      this.state = {};
      this.local = props.l;
  }

  componentDidMount() {
      let self = this;
      const defaultMapOptions = {
          center: {
              lat: this.local.lat,
              lng: this.local.ing
          },
          zoom: 17,
      };

      

      loader.load().then((google) => {
        


          const map = new google.maps.Map(
              self.googleMapDiv,
              defaultMapOptions);
          /*
              store them in the state so you can use it later
              E.g. call a function on the map object:
                  this.state.map.panTo(...)
              E.g. create a new marker:
                  new this.state.google.maps.Marker(...)
          */

          this.setState({
              google: google,
              map: map
          });

          new this.state.google.maps.Marker({
            position: {lat: this.local.lat, lng: this.local.ing},
            map: map,
            title: this.local.nombre
          });


      });
  }

  render() {
      return (
          <div
              ref={(ref) => { this.googleMapDiv = ref }}
              style={{ height: '50vh', width: '60%' }}>
          </div>
      )
  }
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

  // Funcion de la api map de google !se deja aquí por utilización de parametros extraidos de la function LocalDetalle


  const imageUrl = local.ruta_imagen;
  return (
    <div>
      <br></br>
      <Container align="center">
        <Card style={{ width: "20rem", border: "none" }}>
          <Card.Img variant="top" src={imageUrl} bsPrefix />
          <Card.Body>
            <Card.Title>{local.nombre}</Card.Title>
            <Card.Text>Ubicacion: {local.ubicacion}</Card.Text>
            <Button variant="dark" size="lg">RESERVAR</Button>
          </Card.Body>
        </Card>
        <div id="map">
          <DemoComponent l={local}/>
      </div>
      </Container>
      <Container>
      
        <h3>Carta:</h3>
        {Productos.map((producto) => (
          <p>
            {producto.nombre}:${producto.precio}
          </p>
        ))}
      </Container>
    </div>
  );
}
