import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import logo from "../components/images/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Nav className="justify-content-center">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <Nav.Item as="li">
        <Nav.Link href="/about-us">What we do</Nav.Link>
      </Nav.Item>

      <NavDropdown title="Upcoming" id="nav-dropdown">
        <NavDropdown.Item href="/upcoming">Startmeuphk</NavDropdown.Item>
        <NavDropdown.Item>Event 2</NavDropdown.Item>
        <NavDropdown.Item>Event 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Past Events" id="nav-dropdown">
        <NavDropdown.Item>26/04/2021</NavDropdown.Item>
        <NavDropdown.Item>17/02/2021</NavDropdown.Item>
        <NavDropdown.Item>09/02/2021</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item as="li">
        <Nav.Link href="/partners">Partners</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/content-hub">Content Hub</Nav.Link>
      </Nav.Item>
      <Button href="/contact" size="m" className="contact">
        Contact
      </Button>
    </Nav>
  );
}

export default NavBar;
