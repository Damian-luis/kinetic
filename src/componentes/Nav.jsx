import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css"
function BasicExample() {
  return (
    <Navbar   style={{position: "sticky",top: "0",zIndex: "100",backgroundColor:"#0b0a24"}} >
      <Container>
        <Navbar.Brand href="#home"> <img src={require("../assets/logo.png")} className="logofavi"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft:"150px"}}>
          <Nav className="me-auto">
            <Nav.Link href="#home"><p className="hov">Home</p></Nav.Link>
            <Nav.Link href="#the-team"><p className="hov">Quienes somos</p></Nav.Link>
            <Nav.Link href="#the-team"><p className="hov"> Contacto</p></Nav.Link>
           {/*  <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;