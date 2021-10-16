import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
class Head extends React.Component{
    render () {
        return (
            <Navbar collapseOnSelect expand="lg"  variant="dark" className="bg_s">
  <Container>
  <Navbar.Brand className="color" href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="text-right">
    <Nav className="me-auto right">
      <Nav.Link className="color" href="#features">HOME</Nav.Link>
      <Nav.Link className="color" href="#pricing">SERVICES</Nav.Link>
      <Nav.Link className="color" href="#pricing">RESUME</Nav.Link>
      <Nav.Link className="color" href="#pricing">PROJECTS</Nav.Link>
      <Nav.Link className="color" href="#pricing">BLOG</Nav.Link>
      <Nav.Link className="color" href="#pricing">CONTACT</Nav.Link>
 
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
        )
    }
}
export default Head;