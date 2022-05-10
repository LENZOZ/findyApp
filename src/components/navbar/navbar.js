import { Fragment } from "react";
import{Navbar,Container,Nav,NavDropdown}from"react-bootstrap";
import{Outlet,Link} from "react-router-dom";

const NavBarHome =()=>{
  return(
    <>
    <Navbar className="navBg" collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Findy-App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
      <Nav.Link as={Link} to="/registro">Registrarme</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <section>
      <Outlet></Outlet>
    </section>

    </>
  )
}

export default NavBarHome;