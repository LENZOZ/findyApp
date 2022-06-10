import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CardPromociones.css';

const CardPromociones = () => {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    getPromociones();
  }, []);

  const getPromociones = async () => {
    let result = await fetch("http://localhost:3001/api/promocion");
    result = await result.json();
    setPromociones(result);
  };

  console.warn(promociones);

  return (
    <div>
      <h3>Promociones:</h3>

      <Carousel>
        {promociones.map((promocion) => (
          <Carousel.Item>
            <Link
              to={"/local/" + promocion.Local_id_local}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img
                className="d-block w-100"
                src={promocion.ruta_imagen}
                alt={promocion.nombre}
              />
              <Carousel.Caption>
            
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CardPromociones;
