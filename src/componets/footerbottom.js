import React  from "react";
import { Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";



class Footerbottom extends React.Component{
    render() {
        return(
            <Col className="f_bottom section">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <p className="h2">Social</p>
                            <p className="text-color p_p">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                   
                        
                            <Navbar  variant="light">
    <Container>

    <Nav className="me-auto m-auto f_icon">
    <Nav.Link href="https://github.com/ajukhullar" target="_blank"><FaGithubSquare /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/ajay-kumar-57b482147/" target="_blank"><FaLinkedin /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/aju_khullar/" target="_blank"><FaInstagramSquare /></Nav.Link>
      <Nav.Link href="tel:8295041809"><FaPhoneAlt /></Nav.Link>
    </Nav>
   
    </Container>
  </Navbar>
           
                            
                        </Col>
                    </Row>
                </Container>
            </Col>
        )
    }
}
export default Footerbottom;