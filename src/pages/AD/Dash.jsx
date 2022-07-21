import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";
import { SideAdmin } from "../../components/navbar/Offcanvas";
import GraficaDash from "../../components/Graficas/Grafica";
import GraficaSimple from "../../components/Graficas/GraficaSimple";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


import "./Dash.css";

export const Dash = () => {

  return(
    <div>
      <Row>
          <Col xs md lg >
          <Row xs={1} md={2} lg={4}>
        
            {/*____Cards___*/}
            <Col>
              <div className="cards">
                <div>
                  <h5 className="cardstittle"> Reservas semanles</h5>
                  <p>30</p>
                  <icon><AiIcons.AiFillCreditCard /></icon>
                  <img></img>
                </div>
              </div>
              </Col>
            {/*___End-Cards___*/}

            {/*____Cards___*/}
            <Col>
              <div className="cards">
                <div>
                  <h5 className="cardstittle"> Reservas totales</h5>
                  <p>30</p>
                  <icon><AiIcons.AiFillCreditCard /></icon>
                </div>
              </div>
              </Col>
            {/*___End-Cards___*/}

            {/*____Cards___*/}
            <Col>
              <div className="cards">
                <div>
                  <h5 className="cardstittle"> Personal</h5>
                  <p>30</p>
                  <icon><AiIcons.AiFillCreditCard /></icon>
                </div>
              </div>
              </Col>
            {/*___End-Cards___*/}

            {/*____Cards___*/}
            <Col>
              <div className="cards">
                <div>
                  <h5 className="cardstittle"> Promociones activas</h5>
                  <p>30</p>
                  <icon><AiIcons.AiFillCreditCard /></icon>
                </div>
              </div>
              </Col>
            {/*___End-Cards___*/}
          </Row>
          </Col>
          <Row Row xs={1} md={2} lg={2}>
            <Col>
            <div className="cards"><GraficaSimple /></div>
            
            </Col>
            <Col>
              <div className="cards"><GraficaDash /></div>
            </Col>
          </Row>
        </Row>
    </div>
    );
};
