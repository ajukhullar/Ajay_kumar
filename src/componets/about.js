import React from "react";
import { Card, Container, Row,Col } from "react-bootstrap";
import ReactTypingEffectDemo from '../componets/typewriter';
// import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
// import { Envelope } from "@react-icons/all-files/fa/FaBeer";


class Personal extends React.Component {
    render() {
        return (
            <Col className="serv m-t">
        <Container>
           
                <Card className="card_ ">
                    <Card.Body>
                    <Row>
                        <Col lg={4}>
                            <Col className="Details bg-light">
                            <h6 class="title mb-2">Personal Details</h6>
                            <p>Mobile: 8195041809, 7051761357</p>
                            
                            <p>Email: <a href="mailto:akumar41809@gmail.com">akumar41809@gmail.com</a></p>
                            <p><span>Languages:</span>Hindi, Dogri, Pubjabi, English</p>
                           
                            <p><span>Nationality:</span> Indian</p>
                            </Col>
                        </Col>
                        <Col lg={8}>
                            <Col className="im_w">
                            <h2 className="type">I Am  <ReactTypingEffectDemo /></h2>
                            <p className="text-color">Hello! My name is Ajay and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

</p>
                            <h4 className="name">AJAY KUMAR</h4>
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
