import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.png'; 
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-custom fixed-top ">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Antigua Collectibles Logo"
          />
          <span className='dancing-script'>Antigua Collectibles</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
