import React from "react";
import { Container,Row ,Col } from "react-bootstrap";

import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";

class Footer extends React.Component {
    render() {
        return(
            <Col className="footer m-t">
                <Container>
                    <Row>
                    <Col className="text-center"><p className="h1">Contact Me</p>
                    <p className="text-color p_p">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </Col>
                    </Row>
                    <Row>
                        <Col lg={4} xs={12}>
                          <Col className="f_b text-center ">
                              <p className="icon_f"><FaPhone /></p>
                              <p className="h5 ">Phone</p>
                              <p className="text-color">+152 534-468-854</p>
                          </Col>
                        </Col>
                        <Col lg={4} xs={12}>
                          <Col className="f_b text-center ">
                              <p className="icon_f"><FaEnvelope /></p>
                              <p className="h5 ">Email</p>
                              <p className="text-color">akumar41809@gmail.com</p>
                          </Col>
                        </Col>
                        <Col lg={4} xs={12}>
                          <Col className="f_b text-center ">
                              <p className="icon_f"><FaMapMarkerAlt /></p>
                              <p className="h5 ">Location</p>
                              <p className="text-color">201, 3rd floor, swastik Appartment, neb sarai, shaket -New Delhi, Pin- 110068</p>
                          </Col>
                        </Col>
                    </Row>
                  
                </Container>
            </Col>
        )
    }
}

export default Footer;