import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamburger from 'hamburger-react';
import { SidebarData } from './SidebarData';
import "./Offcanvas.css"; 

export function SideAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Hamburger toggled={show} toggle={setShow} color="white"  />
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="offttHead" closeButton>
          <Offcanvas.Title className="offttTittle">Administrador</Offcanvas.Title>
        </Offcanvas.Header>


        <Offcanvas.Body className="offttBody">
        {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName} /* onclick= cierra el offcanvas */  onClick={handleClose} >
                          <Link to={item.path} >
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
        </Offcanvas.Body>

        
      </Offcanvas>
    </>
  );
}
