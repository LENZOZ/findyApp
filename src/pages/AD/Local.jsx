import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { LocalMenus } from "../../components/Cards/LocalMenus";

import { SidebarData } from "../../components/navbar/SidebarData";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { LocalCar } from "../../components/Cards/LocalCar";
import TableMenus from "../../components/Graficas/TableMenus";
import PromGrid from "../../components/Cards/PromGrid";



export const Local = () => {
    return(
        <div>
             {/*Sidebar+Content*/}
      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col xs md lg >
          <Row xs={1} md lg>
            {/*Tablas*/}
            <Col align="center">
                    <Tab.Container>
                    <Row>
                        <Col align="center">
                        <h2 className="ttable" style={{padding:10,width:210}}>Bienvenido a su local</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <LocalCar />
                        </Col>
                      </Row>
                      <Row className="MenuCarta" xs={1} md={2} align="center">
                        <Col align="center">
                        <LocalMenus />
                        </Col>
                        <Col align="center">
                        <h3 className="ttable">Promociones</h3>
                        <PromGrid />
                        </Col>
                      </Row>
                    </Tab.Container>
            </Col>
          </Row>
          </Col>
        </Row>
        </Tab.Container>
        </div>
 
    )

}


     