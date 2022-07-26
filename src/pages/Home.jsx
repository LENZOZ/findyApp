import React, { useEffect, useRef } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Carousel } from "react-bootstrap";

const Home =()=>{
    return(
        <Container align="center">
        <div>
            <br></br>
            <h1>¡Bienvenido a Findy!</h1>
            <br></br>
            <Carousel>                                              
          <Carousel.Item interval={3000}>
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fa.png?alt=media&token=961e0ec1-8c3e-4e5b-bbbd-25a31e095aea"
                alt=''
              />
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fb.png?alt=media&token=e57c247d-a9ee-4d80-abb0-106633c3f951"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fc.png?alt=media&token=198bc1a4-4a87-4136-b07d-e3fa4c7e8b0b"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fd.png?alt=media&token=a2429b48-dd59-4539-9dd3-8dfa50d46c36"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fe.png?alt=media&token=11c2cac1-2bb7-4f9d-a9ed-98e23edc25bb"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-200"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Ff.png?alt=media&token=69063bba-d87c-4b32-a761-7065cc4eafa4"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fg.png?alt=media&token=17c4f2e8-6375-4e1e-94ac-15fea32b82c7"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fh.png?alt=media&token=893416f7-4988-45a4-b808-621543640833"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item interval={3000}>
            
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/findy-app-fccd7.appspot.com/o/findy%2Fi.PNG?alt=media&token=afeef98e-a946-4f03-b3d1-cc98db1e6deb"
                alt=''
              />
              
              <Carousel.Caption>
            
              </Carousel.Caption>

          </Carousel.Item>
               
      </Carousel>
            
        </div>
        </Container>
    );
}
export default Home;