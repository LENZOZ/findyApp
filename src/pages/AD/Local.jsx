import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

import { LocalCar } from "../../components/Cards/LocalCar";
import TableMenus from "../../components/Graficas/TableMenus";
import { PromGrid } from "../../components/Cards/PromGrid";


export const Local = () => {

    const [sidebar, setSidebar] = useState(false);

      const showSidebar = () => setSidebar(!sidebar);

    return(
        <div>

             {/*Sidebar+Content*/}
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col xs={4} md={3} className="dashbg">
          {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
          </Col>
          <Col xs md lg >
          <Row xs={1} md lg className="g-4">
            {/*Tablas*/}
            <Col>
                    <Tab.Container>
                    <Row>
                        <Col align="center">
                        <h2 className="ttable" style={{padding:20,width:130}}>Bienvenido a su local</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <LocalCar />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <TableMenus />
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


     