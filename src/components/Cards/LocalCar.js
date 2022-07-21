import { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import "./PromCar.css";


export function LocalCar() {


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
                <p className='h3car'>20/06/2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
            </Carousel>
        </div>
        
        
    )

}
{/* src="https://apitemplateio-user.s3-ap-southeast-1.amazonaws.com/7827/7379/a1232b7d-60d6-4ccb-ac99-64ca5e623b4a.png"
    alt="Third slide" */}