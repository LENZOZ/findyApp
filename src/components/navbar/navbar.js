import { Fragment } from "react";
import logo from "../../assets/images/logo.svg";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";

const NavBarHome = () => {
  const auth = localStorage.getItem("usuario");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };
  return (
    <div>
      <Navbar className="navBg" collapseOnSelect expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Findy logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
                    <Button variant="outline-warning">Registrarme</Button>
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
