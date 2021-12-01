import React from "react";
import {Carousel, Col, Nav} from "react-bootstrap"
import banner from "../componets/Images/banner_1.jpg"
import banner2 from "../componets/Images/banner_2.jpg"
import banner3 from "../componets/Images/banner_3.jpg"
import banner_aju from "../componets/Images/banner_aju.png"


class Slider extends React.Component {
    render(){
        return(
          <>
           <Col >
         
            <Carousel fade id="home" >
         
         
  <Carousel.Item >
 
    <img
      className="d-block w-100 slide"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>
    <img
      className="d-block w-20"
      src={banner_aju}
      alt="web developer"
    />
    <h3>Here I'am Web Developer</h3>
      <small>I'm Passionate <strong className="primary">Web designer</strong></small>
      <Nav className="text-center justify-center">
      <Nav.Link className="btn btn-primary text-white m-1" href="#contact" >Hire Me</Nav.Link>
        <Nav.Link className="btn btn-primary text-white m-1" href="https://drive.google.com/file/d/1qOnDXno2qITiU6gknDMEjM-3PmImNlPC/view?usp=sharing" target="blank">Download</Nav.Link>

      </Nav>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>

    <img
      className="d-block w-100 slide"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <img
      className="d-block w-20"
      src={banner_aju}
      alt="web developer"
    />
      <h3>Here I'am Web Developer</h3>
      <small>I'm Passionate <strong className="primary">Web designer</strong></small>
      <Nav className="text-center justify-center">
      <Nav.Link className="btn btn-primary text-white m-1" href="#contact">Hire Me</Nav.Link>
        <Nav.Link className="btn btn-primary text-white m-1" href="https://drive.google.com/file/d/1qOnDXno2qITiU6gknDMEjM-3PmImNlPC/view?usp=sharing" target="blank">Download</Nav.Link>

      </Nav>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
 
    <img
      className="d-block w-100 slide"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img
      className="d-block w-20"
      src={banner_aju}
      alt="web developer"
    />
    <h3>Here I'am Web Developer</h3>
      <small>I'm Passionate <strong className="primary">Web designer</strong></small>
      <Nav className="text-center justify-center">
      <Nav.Link className="btn btn-primary text-white m-1" href="#contact" >Hire Me</Nav.Link>
        <Nav.Link className="btn btn-primary text-white m-1" href="https://drive.google.com/file/d/1qOnDXno2qITiU6gknDMEjM-3PmImNlPC/view?usp=sharing" target="blank">Download</Nav.Link>

      </Nav>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>

</>
        )
    }
}
export default Slider;