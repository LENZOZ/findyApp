import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import "./PromCar.css"


export function PromCar() {

    return(
        
        <div className='PromCar'>
            <Carousel className='Pcar'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://apitemplateio-user.s3-ap-southeast-1.amazonaws.com/7827/7374/1e175932-cb5d-42c5-adac-5e821f0c2ece.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className='h3car'>Promocion1</h3>
                <p className='h3car'>20/06/2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://apitemplateio-user.s3-ap-southeast-1.amazonaws.com/7827/7375/04a3fb30-6847-4889-814b-c8bd4b987fd3.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className='h3car'>Promocion2</h3>
                <p className='h3car'>25/06/2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://apitemplateio-user.s3-ap-southeast-1.amazonaws.com/7827/7379/a1232b7d-60d6-4ccb-ac99-64ca5e623b4a.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className='h3car'>Promocion3</h3>
                <p className='h3car'>30/07/2022</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        
        
    )

}