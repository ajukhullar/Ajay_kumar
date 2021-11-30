import React from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import aju from "../componets/Images/aju.png"
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { FaPhotoVideo } from "@react-icons/all-files/fa/FaPhotoVideo";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";





class Workexpert extends React.Component {
    render() {
        return (
            <Col className="section" id="blog">
            <Container>
             
                <Row>
                <Col lg={4} xs={12}>
                
                    <Col className="frame">
                <img
      className="d-block w-70"
      src={aju}
      alt="Aju"
   />
    </Col>
    
                </Col>
                <Col lg={8} xs={12}>
                <p className="h2 text-center">Work Expertise</p>
                <p className="ser_p text-color text-center">Obviously I'm a Web Designer. Experienced with all stages of the <br /> development cycle for dynamic web projects.</p>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaReact />
                        <p className="w_p h6">Recat js</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={40} />
                        <p className="pers">40%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaHtml5 />
                        <p className="w_p h6">HTML </p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={95} />
                        <p className="pers">95%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaBootstrap />
                        <p className="w_p h6">Bootstrap</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={80} />
                        <p className="pers">80%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaCss3Alt />
                        <p className="w_p h6">CSS</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={70} />
                        <p className="pers">70%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaReact />
                        <p className="w_p h6">scss</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={60} />
                        <p className="pers">60%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaJava />
                        <p className="w_p h6">Javascript</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={50} />
                        <p className="pers">50%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaPhotoVideo />
                        <p className="w_p h6">Photoshop</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={40} />
                        <p className="pers">40%</p>

                    </Col>
                    <Col className="exp">
                        <Col className="text-center ic">
                        <FaWordpress />
                        <p className="w_p h6">Wordpress</p>
                        </Col>
                      
                        <ProgressBar className="react" variant="info" now={70} />
                        <p className="pers">70%</p>

                    </Col>
              
             


                </Col>
                </Row>
            </Container>
            </Col>
        )
    }
    

}
export default Workexpert;