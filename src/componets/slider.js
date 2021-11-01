import React from "react";
import {Carousel, Col} from "react-bootstrap"
import banner from "../componets/Images/banner_1.jpg"
import banner2 from "../componets/Images/banner_2.jpg"
import banner3 from "../componets/Images/banner_3.jpg"
import Part from "../componets/partical"
import Part2 from "../componets/partical"

class Slider extends React.Component {
    render(){
        return(
          <>
           <Col >
        
            <Carousel fade id=" home" >
            
         
  <Carousel.Item >
  <Part />
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
 <Part2 />
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
 
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>

</>
        )
    }
}
export default Slider;