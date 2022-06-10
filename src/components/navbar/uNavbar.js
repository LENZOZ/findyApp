import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const NavBarUser = () =>{

    return(
        
        <Navbar className="navBg" expand="lg" variant="dark">
  <Container fluid>
  <Navbar.Brand as={Link} to="/home"><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Findy logo"
      /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link  as={Link} to="/uHome">Inicio</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="¿Qué buscas?"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )

}

export default NavBarUser;