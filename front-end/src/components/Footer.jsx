import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = ()=> {
  return (
    <footer className="bg-dark text-light py-3 mb-0">
    <Container>
      <Row>
        <Col md={6}>
          <p>&copy; {new Date().getFullYear()} Copyright:{'TheDungeon'}</p>
        </Col>
        <Col md={6}>
        <a style={{color: 'white', textDecoration: 'none'}} href='/'>
          DeathStroke
        </a>
        </Col>
      </Row>
    </Container>
  </footer>
  );
}

export default Footer