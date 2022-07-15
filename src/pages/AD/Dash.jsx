import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


import "./Dash.css";

export const Dash = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return(
    <div>
      {/*Sidebar+Content*/}
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col xs={5} md={3} lg={3} className="dashbg">
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
          <Col xs={7} md lg >
          <Row xs={1} md={2} lg={4}>
            {/*Reservas semanales*/}
            <Col>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title className="cardstittle" >Reservas Semanales</Card.Title>
                    <Card.Text>
                      30
                    </Card.Text>
                    <icon><AiIcons.AiFillCreditCard /></icon>
                  </Card.Body>
                </Card>
              </Col>
              {/*reervas totales*/}
              <Col>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title className="cardstittle" >Reservas totales</Card.Title>
                    <Card.Text>
                      120
                    </Card.Text>
                    <icon><AiIcons.AiFillCreditCard /></icon>
                  </Card.Body>
                </Card>
              </Col>
              {/*Personal*/}
              <Col>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title className="cardstittle" >Personal</Card.Title>
                    <Card.Text>
                      34
                    </Card.Text>
                    <icon><IoIcons.IoMdPeople /></icon>
                  </Card.Body>
                </Card>
              </Col>
              {/*Promociones activas*/}
              <Col>
                <Card className="cards">
                  <Card.Body>
                    <Card.Title className="cardstittle" >Promociones activas</Card.Title>
                    <Card.Text>
                      3
                    </Card.Text>
                    <icon><AiIcons.AiFillCreditCard /></icon>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
              
          </Col>
        </Row>
      </Tab.Container>
    </div>
    );
};
