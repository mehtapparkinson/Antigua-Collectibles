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
import image7 from './imgs/7.png';
import image8 from './imgs/8.png';
import image9 from './imgs/9.png';
import image10 from './imgs/10.png';
import image11 from './imgs/11.png';
import image12 from './imgs/12.png';
import image13 from './imgs/13.png';
import image14 from './imgs/14.png';
import image15 from './imgs/15.png';
import image16 from './imgs/16.png';
import image17 from './imgs/17.png';
import image18 from './imgs/18.png';


const Gallery = () => {
    const products = [
        { id: 1, image: image1, title: 'Vine Leaves Tiffany Lamp', description: 'A classic Vine Leaves Tiffany lamp with a beautiful stained glass shade.', size: 'large' },
        { id: 2, image: image2, title: 'Vine Leaves Tiffany Lamp', description: 'A classic Vine Leaves Tiffany lamp with a beautiful stained glass shade.', size: 'medium' },
        { id: 3, image: image3, title: 'Vine Leaves Tiffany Lamp', description: 'A classic Vine Leaves Tiffany lamp with a beautiful stained glass shade.', size: 'large' },
        
        { id: 4, image: image4, title: 'Yellow Peacock Tiffany Lamp', description: 'A timeless Yellow Peacock Tiffany lamp that adds elegance to any room.', size: 'large' },
        { id: 5, image: image5, title: 'Yellow Peacock Tiffany Lamp', description: 'A timeless Yellow Peacock Tiffany lamp that adds elegance to any room.', size: 'medium' },
        { id: 6, image: image6, title: 'Yellow Peacock Tiffany Lamp', description: 'A timeless Yellow Peacock Tiffany lamp that adds elegance to any room.', size: 'large' },
        
        { id: 7, image: image7, title: 'Green Peacock Tiffany Lamp', description: 'An exquisite Green Peacock Tiffany lamp with intricate detailing.', size: 'large' },
        { id: 8, image: image8, title: 'Green Peacock Tiffany Lamp', description: 'An exquisite Green Peacock Tiffany lamp with intricate detailing.', size: 'medium' },
        { id: 9, image: image9, title: 'Green Peacock Tiffany Lamp', description: 'An exquisite Green Peacock Tiffany lamp with intricate detailing.', size: 'large' },
        
        { id: 10, image: image10, title: 'Roses Tiffany Lamp', description: 'A stunning Roses Tiffany lamp with vibrant colors.', size: 'large' },
        { id: 11, image: image11, title: 'Roses Tiffany Lamp', description: 'A stunning Roses Tiffany lamp with vibrant colors.', size: 'medium' },
        { id: 12, image: image12, title: 'Roses Tiffany Lamp', description: 'A stunning Roses Tiffany lamp with vibrant colors.', size: 'large' },
        
        { id: 13, image: image13, title: 'Red Vine Leaves Tiffany Lamp', description: 'A charming Red Vine Leaves Tiffany lamp perfect for any decor.', size: 'large' },
        { id: 14, image: image14, title: 'Red Vine Leaves Tiffany Lamp', description: 'A charming Red Vine Leaves Tiffany lamp perfect for any decor.', size: 'medium' },
        { id: 15, image: image15, title: 'Red Vine Leaves Tiffany Lamp', description: 'A charming Red Vine Leaves Tiffany lamp perfect for any decor.', size: 'large' },
        
        { id: 16, image: image16, title: 'Floral Tiffany Floor Lamp', description: 'A beautiful Floral Tiffany Floor Lamp with a unique design.', size: 'large' },
        { id: 17, image: image17, title: 'Floral Tiffany Floor Lamp', description: 'A beautiful Floral Tiffany Floor Lamp with a unique design.', size: 'medium' },
        { id: 18, image: image18, title: 'Floral Tiffany Floor Lamp', description: 'A beautiful Floral Tiffany Floor Lamp with a unique design.', size: 'large' },
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
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
            
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
          
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
    </motion.div>
  );
}
export default Gallery;
