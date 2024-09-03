import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import img from "./about.png";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 2}}
        >
    <Container className="about-section">
      <Row className="align-items-center">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={img} alt="About Us" className="img-fluid" />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h2 className="mb-4 special-elite-regular">About Us</h2>
            <p className="text-muted">
              Welcome to Antigua Collectibles, where history meets heart. We
              pour love and care into selecting each item that graces our
              shelves. From vintage heirlooms to one-of-a-kind pieces, our
              collection is a testament to the beauty of craftsmanship and the
              stories these items carry. We’re thrilled to offer you a slice of
              history that you can cherish for years to come.
            </p>
            <Link
              to="https://www.etsy.com/shop/AntiguaCollectibles"
              target="_blank"
              rel="noopener noreferrer"
            >
                <Button id="button"> Visit Our Etsy Store</Button>
             
            </Link>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </motion.div>
    </div>
  );
};

export default About;
