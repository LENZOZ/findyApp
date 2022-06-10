import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardPromociones from "./CardPromociones";
import './ListaLocales.css';

const ListaLocales = () => {
  const [locales, setLocales] = useState([]);

  useEffect(() => {
    getLocales();
  }, []);

  const getLocales = async () => {
    let result = await fetch("http://localhost:3001/api/local");
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
              <Link
                to={"/local/" + local.id_local}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Card
                  style={{ width: "10rem", border: "none" }}
                  key={local.id_local}
                  local={local}
                >
                  <Card.Img
                    variant="top"
                    src={local.ruta_imagen}
                    alt={local.nombre}
                    bsPrefix="card-img"
                  />
                  <Card.Body>
                    <Card.Title align="center">{local.nombre}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ListaLocales;
