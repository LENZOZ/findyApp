import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab, Nav } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";

import DataTable from "../../components/Graficas/TablePersonal";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Personal = () => {

    return(
        <div>
             {/*Sidebar+Content*/}
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col xs md lg >
          <Row xs md lg className="g-4">
            {/*Tablas*/}
            {/*<Col xs>
            <Nav.Link as={Link} to="/admin/personal/agregar" className='tableNav' ><AiIcons.AiFillPlusCircle fontSize="xx-large" /></Nav.Link>
            </Col>*/}
            </Row>
            <Row xs md lg className="g-4">
            <Col>
                 <DataTable />
            </Col>
            </Row>
          </Col>
        </Row>
      </Tab.Container>

            

        </div>
 
    )

}


     