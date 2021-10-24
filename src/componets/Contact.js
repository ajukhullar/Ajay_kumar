import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import ReactDOM from 'react-dom';

import { Form, Container, Row, Col, Button } from 'react-bootstrap';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nvwe8kj', 'template_i8c69oa', e.target, 'user_srR3pWQDVgOZRjTlWHnwm') 
      .then((result) => {
        return (
            ReactDOM.render(    <div className="alert alert-success alert-dismissible d-flex align-items-center fade show">
            <i className="bi-check-circle-fill"></i>
          <strong className="mx-2">Success!</strong> Your message has been sent successfully.
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      </div>, document.getElementById('sandy'))
        )
        //   console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <Col className="contact section">
      <Container>
          <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                  <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-4" >
                    <Form.Control type="name" name="name" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="email" name="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="number" name="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="Subject" name="Subject" placeholder="Enter Subject" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                    <Form.Control type="text" name="message" placeholder="Enter Message" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Send">
    SUBMIT
  </Button>


                  </Form>
                  <p id="sandy"></p>

              </Col>
          </Row>

      </Container>
      
      </Col>
  
  );
};

export default ContactUs;