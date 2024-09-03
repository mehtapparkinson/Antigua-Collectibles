import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero">
      <Container className="text-center d-flex flex-column justify-content-center h-100">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="mb-4"
        >
          Discover Timeless Antiques
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link to="/gallery">
            <Button variant="light" size="lg">Explore Our Collection</Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hero;
