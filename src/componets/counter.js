import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Profile from "../componets/happyclient";
import Happy  from "./happyuser";


class Counter extends React.Component{

  
    render() {
        
        return (
            <Col className="count section" id="project">
                <Container>
                    <Row>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2><Profile /></h2>
                            <p className="h5">Happy Client </p>
                        </Col>
                       
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>0</h2>
                            <p className="h5">Download </p>
                        </Col>
                       
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2><Happy /></h2>
                            <p className="h5">Happy User </p>
                        </Col>
                        
                    </Col>
                    <Col lg={3}>
                        <Col className="Count_b">
                            <h2>2 +</h2>
                            <p className="h5">Years of expe. </p>
                        </Col>
                       
                    </Col>
                    </Row>
                </Container>
            
            </Col>
        )
    }
}

export default Counter;