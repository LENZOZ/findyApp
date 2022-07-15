import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";
import { PromCar } from "../../components/Cards/PromCar";
import { PromGrid } from "../../components/Cards/PromGrid";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Promociones = () => {

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
            <PromCar />
            <Navbar.Brand as={Link} to="/admin/promociones/agregar"  ><AiIcons.AiFillPlusCircle fontSize="xx-large" /></Navbar.Brand>
            <PromGrid />
            </Col>
          </Row>
              
          </Col>
        </Row>
      </Tab.Container>

            

        </div>
 
    )

}


     