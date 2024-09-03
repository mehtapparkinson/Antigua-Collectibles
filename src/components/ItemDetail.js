import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ItemDetail.css';


const items = [
  { id: 1, images: ["/imgs/1.png", '/imgs/1.png'], title: 'Antique Vase', description: 'A beautiful antique vase with intricate designs.' },
  { id: 2, images: ['/imgs/2.png', '/imgs/2_1.png'], title: 'Vintage Clock', description: 'A timeless vintage clock that adds charm to any room.' },
  { id: 3, images: ['/imgs/3.png', '/imgs/3_1.png'], title: 'Porcelain Figurine', description: 'An elegant porcelain figurine, perfect for collectors.' },
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <Container className="item-detail">
      <Row>
        <Col md={6}>
          <Carousel>
            {item.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
