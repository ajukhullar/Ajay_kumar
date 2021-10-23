import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container,Col, Row } from "react-bootstrap";
import { FaFeatherAlt } from "@react-icons/all-files/fa/FaFeatherAlt";
import { FaReact } from "@react-icons/all-files/fa/FaReact";


class Workpart extends React.Component {
    render(){
        return(
            <Col className="workp m-t">
                <Container>
                    <Row>
                    <Col lg={4} className="w_c">

                        <Col className="work_l_p ">
                        <h2>Work Participation</h2>
                        <p className="text-color">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <Button href="#" className="btn btn-primary">See More </Button>
                        </Col>
                    </Col>
                    <Col lg={8} >
                        <Col className="UX_one p-3 radius_l">
                            <Col className="w_s w_ss"><Col className="outer_c"><p className="icon"><FaFeatherAlt /></p></Col></Col>
                            <Col>
                            <p class="h4">UX Designer</p>
                            <mark>2015 - 2018</mark >
                            <small>Oppo - HR Manager</small>
                            <p className="text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                            </Col>
                        
                        </Col>
                        <Col className="UX_one p-3 radius_r m-t-w">
                            
                            <Col>
                            <p class="h4">Web Developer</p>
                            <mark>2015 - 2018</mark >
                            <small>Oppo - HR Manager</small>
                            <p className="text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                            </Col>
                            <Col className="w_s w_sss"><Col className="outer_c"><p className="icon"><FaReact /></p></Col></Col>
                        
                        </Col>
                        <Col className="UX_one p-3 radius_l m-t-w">
                            <Col className="w_s w_ssss"><Col className="outer_c"><p className="icon"><FaFeatherAlt /></p></Col></Col>
                            <Col>
                            <p class="h4">Graphic Designer</p>
                            <mark>2015 - 2018</mark >
                            <small>Oppo - HR Manager</small>
                            <p className="text-color">With lots of unique blocks, you can easily build a page without coding.</p>
                            </Col>
                        
                        </Col>
                    </Col>
                    </Row>
                </Container>
            
            </Col>
        )
    }
}
export default Workpart;