import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logo.png'; 
import './header.css';
import { Link } from 'react-router-dom';

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
            <Link className='nav-link' to="/">Home</Link>
            <Link  className='nav-link'to="/about">About</Link>
            <Link className='nav-link' to="/gallery">Gallery</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
