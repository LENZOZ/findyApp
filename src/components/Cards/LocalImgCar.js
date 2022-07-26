import { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import "./PromCar.css";


export function LocalImgCar() {

    const authA = localStorage.getItem("admin");

    let id=  0;//JSON.parse(authA).Local_id_local;
    if (authA){
    id = JSON.parse(authA).Local_id_local;
    }

    const [locales, setLocales] = useState([]);

    useEffect(() => {
        getLocales();
    }, []);

    const getLocales = async () => {
        let result = await fetch("https://api.findy.cl/api/producto/"+id);
        result = await result.json();
        setLocales(result);
    };

 
    return(
        
        <div className="PromCar">
            <Carousel className='Pcar'>
            {locales.map((local) => (
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={local.ruta_imagen}
                alt={local.nombre}
                />
                <Carousel.Caption>
                <h3 className='h3car'>{local.nombre}</h3>
                <p className='h3car'>{local.descripcion}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
        
        
    )

}
{/* src="https://apitemplateio-user.s3-ap-southeast-1.amazonaws.com/7827/7379/a1232b7d-60d6-4ccb-ac99-64ca5e623b4a.png"
    alt="Third slide" */}