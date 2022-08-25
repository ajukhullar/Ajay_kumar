import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import bac from "../componets/Images/molecule-structure-transparent.png";

class Footer extends React.Component {
  render() {
    return (
      <Col className="footer m-t" style={{ backgroundImage: `url(${bac})` }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p className="h1">Contact Me</p>
              <p className="text-color p_p">
                Obviously I'm a Web Designer. Experienced with all stages of the
                development cycle for dynamic web projects.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} xs={12}>
              <Col className="f_b text-center ">
                <p className="icon_f phone">
                  <FaPhone />
                </p>
                <p className="h5 ">Phone</p>

                <Nav className="number">
                  <Nav.Link href="tel:8295041809">8295041809</Nav.Link>
                </Nav>
              </Col>
            </Col>
            <Col lg={4} xs={12}>
              <Col className="f_b text-center ">
                <p className="icon_f">
                  <FaEnvelope />
                </p>
                <p className="h5 ">Email</p>
                <Nav className="number ">
                  <Nav.Link href="mailto:akumar41809@gmail.com">
                    akumar41809@gmail.com
                  </Nav.Link>
                </Nav>
              </Col>
            </Col>
            <Col lg={4} xs={12}>
              <Col className="f_b text-center ">
                <p className="icon_f">
                  <FaMapMarkerAlt />
                </p>
                <p className="h5 ">Location</p>
                <p className="text-color">
                  234, 3rd floor, Above Parteek optical, jharsa Road, Sector 15,
                  Part - 1 -Gurugram, Pin- 122001
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default Footer;
