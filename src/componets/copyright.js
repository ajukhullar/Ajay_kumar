import React  from "react";
import { Container, Col, Row } from "react-bootstrap";


function Copyr() {
    return(
        <Col className="copyright">
            <Container>
                <Row>
                <Col lg={12} className="text-center">
                    <p>© 2021. Design by AJAY KHULLAR</p>
                </Col>
                </Row>
            </Container>
        </Col>
    )
}
export default Copyr;