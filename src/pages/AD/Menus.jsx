import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Form, Row, Col, Container, Tab ,Nav } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { SidebarData } from "../../components/navbar/SidebarData";
import TableMenus from "../../components/Graficas/TableMenus";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const Menus = () => {


    return(
        <div>

             {/*Sidebar+Content*/}

      <Tab.Container id="list-group-tabs-example">
        <Row>
          <Col xs md lg >
          <Row xs md lg className="g-4">
            {/*Body*/}
            <Col >
            
            <Row>
            <Col>
              <h6 className='ttable' >Menús</h6>
              </Col>
              <Col align="right" >
              <Nav.Link as={Link} to="/admin/menus/agregar" className='tableNav' ><AiIcons.AiFillPlusCircle fontSize="xx-large" /></Nav.Link>
              </Col>
            </Row>
            <TableMenus />



            </Col>
          </Row>
              
          </Col>
        </Row>
      </Tab.Container>

            

        </div>
 
    )

}


     