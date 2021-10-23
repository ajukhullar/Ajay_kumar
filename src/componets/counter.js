import React from "react";
import { Col, Container, Row } from "react-bootstrap";


class Counter extends React.Component{

  
    render() {
        
        return (
            <Col className="count section">
                <Container>
                    <Row>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>97</h2>
                            <p className="h5">Happy Client </p>
                        </Col>
                       
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>97</h2>
                            <p className="h5">Happy Client </p>
                        </Col>
                       
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>97</h2>
                            <p className="h5">Happy Client </p>
                        </Col>
                        
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>97</h2>
                            <p className="h5">Happy Client </p>
                        </Col>
                       
                    </Col>
                    </Row>
                </Container>
            
            </Col>
        )
    }
}

export default Counter;