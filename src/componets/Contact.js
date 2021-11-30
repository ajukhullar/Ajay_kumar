import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReactDOM from 'react-dom';

import { Form, Container, Row, Col, Button } from 'react-bootstrap';



export const ContactUs = () => {


  const [removeMessage, setRemoveMessage] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   
    // const handleClose = () => {this.setState({show:false})};
    const removeMessage = () => {
      console.log('testing 101');
      // setRemoveMessage(true);
      document.querySelector('#sandy').style.display = "none"
    }
    
    emailjs.sendForm('service_35jh8u9', 'template_9o7i49y', e.target, 'user_vhEwCVTpYsX39p3yoNSFj') 
      .then((result) => {
        return (
            ReactDOM.render(
              
            <div 
            className="alert alert-success alert-dismissible d-flex align-items-center fade show">
              <i className="bi-check-circle-fill"></i>
              <strong className="mx-2">Success!</strong> Your message has been sent successfully.
              <button type="button" onClick={removeMessage} className="btn-close"  data-bs-dismiss="alert"></button>
            </div>,
            document.getElementById('sandy'))
        )
        //   console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <Col className="contact section" id="contact" >
      <Container>
          <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                  <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-4" > 
                    <Form.Control type="name" name="name"  required  placeholder="Enter Your Name" className="input_f" 
                     
                     
                    />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="email" name="email" required placeholder="Enter Your Email" className="input_f"/>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="number" name="number" required placeholder="Enter Phone Number"  className="input_f"/>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="Subject" name="Subject" required placeholder="Enter Subject" className="input_f"/>
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="text" name="message" required placeholder="Enter Message" className="input_f"/>
                    </Form.Group>
                    <Button variant="primary" type="submit"  value="Send">
    SUBMIT
  </Button>


                  </Form>
                  <p id="sandy" ></p>

              </Col>
          </Row>

      </Container>
      
      </Col>
  
  );
};

export default ContactUs;