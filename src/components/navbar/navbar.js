import { Fragment, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Navbar, Container, Nav, Button, NavDropdown, Dropdown, Collapse } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Hamburger from "hamburger-react";
import { Hidden } from "@material-ui/core";

import { SidebarData } from "../../components/navbar/SidebarData";
import { IconContext } from 'react-icons';
import { SideAdmin } from "./Offcanvas";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


const NavBarHome = () => {
  const auth = localStorage.getItem("usuario");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };
  const [open, setOpen] = useState(false);


  return (
    <div>
      <Navbar className="navBg" expand="lg" variant="dark">
        <Container fluid>
        {auth ? (
          <>
          <SideAdmin />
          </>
        ):(
          <></>
        )}
          
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Findy logo"
            />
          </Navbar.Brand>
          <Hidden mdUp>
          <Hamburger toggled={open} toggle={setOpen} color="white"  />
          </Hidden>
          <Navbar.Collapse in={open}>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
            </Nav>
            <Nav>
              {auth ? (
                <>
                  <Nav.Link onClick={logout} as={Link} to="/login">
                    <Button variant="dark">Salir</Button>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/MisReservas">
                    <Button variant="dark">
                      Mis Reservas {JSON.parse(auth).nombre}
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavDropdown
                    title="Iniciar Sesión"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/login">
                        <Button variant="dark">
                          ¡Soy Cliente!
                        </Button>
                      </Nav.Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/loginAdmin" align="left">
                        <Button variant="dark">
                          ¡Soy administrador!
                        </Button>
                      </Link>
                    </NavDropdown.Item>
                    
                  </NavDropdown>

                  <Nav.Link as={Link} to="/registro">
                    <Button variant="outline-warning" >Registrarme</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarHome;
