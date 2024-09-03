import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <p>
              Visit our <a href="https://antiguacollectibles.etsy.com/" className="etsy-link"> Etsy store  </a> for more unique treasures
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Antigua Collectibles. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
