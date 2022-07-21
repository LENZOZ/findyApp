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
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
                src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
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
                src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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