import React from "react";
import { Card, Container, Row,Col } from "react-bootstrap";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import { Envelope } from "@react-icons/all-files/fa/FaBeer";


class Personal extends React.Component {
    render() {
        return (
        <Container>
           
                <Card>
                    <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <Col className="Details">
                            <h6 class="title mb-2">Personal Details</h6>
                            
                            <p><FaEnvelope />Email: <a href="mailto:akumar41809@gmail.com">akumar41809@gmail.com</a></p>
                            </Col>
                        </Col>
                        <Col lg={8}>test</Col>
                        </Row>
                    </Card.Body>
                </Card>
           
        </Container>
        )
    }
}
export default Personal;
