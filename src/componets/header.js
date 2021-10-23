import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
class Head extends React.Component{
    render () {
        return (
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="bg_s" sticky="top" bg="white">
  <Container>
  <Navbar.Brand className="color" href="#home">AJAY KUMAR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="text-right">
    <Nav className="me-auto right">
      <Nav.Link className="color" href="#home">HOME</Nav.Link>
      <Nav.Link className="color" href="#service">SERVICES</Nav.Link>
      <Nav.Link className="color" href="#resume">RESUME</Nav.Link>
      <Nav.Link className="color" href="#project">PROJECTS</Nav.Link>
      <Nav.Link className="color" href="#blog">BLOG</Nav.Link>
      <Nav.Link className="color" href="#contact">CONTACT</Nav.Link>
 
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
        )
    }
}
export default Head;