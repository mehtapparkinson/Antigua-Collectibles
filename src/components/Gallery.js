import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Gallery.css'; 
import image1 from './imgs/1.png';
import image2 from './imgs/2.png';
import image3 from './imgs/3.png';
import image4 from './imgs/4.png';
import image5 from './imgs/5.png';
import image6 from './imgs/6.png';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const products = [
    { id: 1, image: image1, title: 'Antique Vase', description: 'A beautiful antique vase.', size: 'large' },
    { id: 2, image: image2, title: 'Vintage Clock', description: 'A timeless vintage clock.', size: 'medium' },
    { id: 3, image: image3, title: 'Porcelain Figurine', description: 'An elegant porcelain figurine.', size: 'large' },
    { id: 4, image: image4, title: 'Antique Vase', description: 'A beautiful antique vase.', size: 'large' },
    { id: 5, image: image5, title: 'Vintage Clock', description: 'A timeless vintage clock.', size: 'medium' },
    { id: 6, image: image6, title: 'Porcelain Figurine', description: 'An elegant porcelain figurine.', size: 'large' },
    { id: 7, image: image1, title: 'Antique Vase', description: 'A beautiful antique vase.', size: 'large' },
    { id: 8, image: image2, title: 'Vintage Clock', description: 'A timeless vintage clock.', size: 'medium' },
    { id: 9, image: image3, title: 'Porcelain Figurine', description: 'An elegant porcelain figurine.', size: 'large' },
    { id: 10, image: image4, title: 'Antique Vase', description: 'A beautiful antique vase.', size: 'large' },
    { id: 11, image: image5, title: 'Vintage Clock', description: 'A timeless vintage clock.', size: 'medium' },
    { id: 12, image: image6, title: 'Porcelain Figurine', description: 'An elegant porcelain figurine.', size: 'large' },
  ];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration: 2}}
  >
    <div className="gallery-page">
      <Container fluid id="gallery" className="gallery-container">
        <h2 className="text-center special-elite-regular ">Our Collection</h2>
        <div className="gallery-grid">
          {products.map((product, index) => (
            <motion.div
              className={`gallery-item ${product.size}`}
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
            <Link className='link' to={`/item/${product.id}`}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
           </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
    </motion.div>
  );
}
export default Gallery;
