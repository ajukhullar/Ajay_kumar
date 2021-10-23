import React from "react";
import { Card, Container, Row,Col } from "react-bootstrap";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import { Envelope } from "@react-icons/all-files/fa/FaBeer";


class Personal extends React.Component {
    render() {
        return (
            <Col className="serv">
        <Container>
           
                <Card className="card_">
                    <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <Col className="Details">
                            <h6 class="title mb-2">Personal Details</h6>
                            
                            <p><FaEnvelope />Email: <a href="mailto:akumar41809@gmail.com">akumar41809@gmail.com</a></p>
                            <p><span>Languages:</span> English</p>
                           
                            <p><span>Nationality:</span> Australian</p>
                            </Col>
                        </Col>
                        <Col lg={8}>
                            <Col className="im_w">
                            <h2>I Am Web Developer|</h2>
                            <p className="text-color">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <h4>AJAY KUMAR</h4>
                            </Col>
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
           
        </Container>
        </Col>
        )
    }
}
export default Personal;
