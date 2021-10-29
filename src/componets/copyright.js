import React  from "react";
import { Container, Col, Row } from "react-bootstrap";
// import { FaAngleDoubleUp } from "@react-icons/all-files/fa/FaAngleDoubleUp";


function Copyr() {
    return(
        <>
        <Col className="copyright">
            <Container>
                <Row>
                <Col lg={12} className="text-center">
                    <p>© 2021. Design by AJAY KHULLAR</p>
                </Col>
                </Row>
            </Container>
        </Col>
        {/* <p className="top"><FaAngleDoubleUp /></p> */}
        </>
    )
}
export default Copyr;