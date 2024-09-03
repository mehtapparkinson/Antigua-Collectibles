import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8vxo2ao', 
      'template_bomeg0u', 
      form.current,
      'eqd_USoiG0Tq-YT3Q'
    )
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
      });

    e.target.reset(); 
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 1}}
  >
    <div className="contact-page">
        
      <Container id="contact" className="my-5 contact-container">
        <h2 className="text-center mb-4 text-white special-elite-regular">Write Us A Letter</h2>
        <Row className="align-items-center justify-content-center">
          <Col md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                  <Form.Label className="my-2">Name</Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label className="my-2">Email</Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label className="my-2">Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required />
                </Form.Group>
                <Button variant="dark" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    
    </div>
    </motion.div>
  );
}

export default Contact;
