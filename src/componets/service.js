import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaDesktop } from "@react-icons/all-files/fa/FaDesktop";
import { FaFeatherAlt } from "@react-icons/all-files/fa/FaFeatherAlt";
import { FaRecordVinyl } from "@react-icons/all-files/fa/FaRecordVinyl";



class Service extends React.Component {
    render () {
        return(
            <Col className="serv m-t" id="service">
            <Container className=" ">
                <Row>
                    <Col lg={12} className="text-center p-lg">
                        <h2>Awesome Service</h2>
                        <p className="ser_p text-color">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                    </Col>
                </Row>
                <Row className="p-6 m-t">
                    <Col lg={4} xs={12} >
                        <Col className="box border p-3 border-radius">
                        <FaDesktop />
                        <p className="h4 s_title">Web Developmnet</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                        
                    </Col>
                    </Col>
                    <Col lg={4} xs={12} >
                    <Col className="box border p-3 border-radius">
                        <FaFeatherAlt />
                        <p className="h4 s_title">Design & Planning</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                    </Col>
                    </Col>
                    <Col lg={4} xs={12} >
                    <Col className="box border p-3 border-radius">
                        <FaRecordVinyl />
                        <p className="h4 s_title">Adobe Photoshop</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                    </Col>
                    
                    </Col>
             
                </Row>
                <Row className="p-6 m-t-10">
                    <Col lg={4} xs={12} >
                        <Col className="box border p-3 border-radius">
                        <FaDesktop />
                        <p className="h4 s_title">Web Developmnet</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                        
                    </Col>
                    </Col>
                    <Col lg={4} xs={12} >
                    <Col className="box border p-3 border-radius">
                        <FaFeatherAlt />
                        <p className="h4 s_title">Design & Planning</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                    </Col>
                    </Col>
                    <Col lg={4} xs={12} >
                    <Col className="box border p-3 border-radius">
                        <FaRecordVinyl />
                        <p className="h4 s_title">Adobe Photoshop</p>
                        <p className="text text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                    </Col>
                    
                    </Col>
             
                </Row>
                

            </Container>
            </Col>
        )
    }
}
export default Service;