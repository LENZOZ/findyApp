import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CardPromociones from "./CardPromociones";
import './ListaLocales.css';

const ListaLocales = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    getLocales();
  }, []);

  const getLocales = async () => {
    let result = await fetch("https://api.findy.cl/api/local");
    result = await result.json();
    setLocales(result);
  };

  console.warn(locales);

  return (
    <>
      <CardPromociones />

      <div className="local-list">
        <h3>Locales:</h3>

        <ul>
          {locales.map((local) => (
            <li>
              
                <Card
                  style={{ width: "10rem", border: "none" }}
                  key={local.id_local}
                  local={local}
                >
                  <Link
                to={"/local/" + local.id_local}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                  <Card.Img
                    variant="top"
                    src={local.ruta_imagen}
                    alt={local.nombre}
                    bsPrefix="card-img"
                    className="imgLocal"
                  />
                  </Link>
                  <Card.Body>
                    <Card.Title align="center">{local.nombre}</Card.Title>
                  </Card.Body>
                </Card>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListaLocales;
