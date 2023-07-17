import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function CollapsibleNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#pricing">Team</Nav.Link>
            <NavDropdown title="School Portal" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#"> <Link to="/portal">Portal</Link></NavDropdown.Item>
              <NavDropdown.Item href="#">
              <Link to="/students">Student Database</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#"> <Link to="/teachers">Staff Database</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
              <Link to="/students/add">Register New Student</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              <Link to="/teachers/add">Register New Staff</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              <Link to="/students">Search Student</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacts">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavBar;