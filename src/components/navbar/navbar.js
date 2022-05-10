import { Fragment } from "react";
import logo from "../../assets/images/logo.svg";
import{Navbar,Container,Nav,Button}from"react-bootstrap";
import{Outlet,Link} from "react-router-dom";

const NavBarHome =()=>{
  return(
    <>
    <Navbar className="navBg" collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home"><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Findy logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/login"><Button variant="dark">Iniciar Sesión</Button></Nav.Link>
      <Nav.Link as={Link} to="/registro"><Button variant="outline-warning">Registrarme</Button></Nav.Link>
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