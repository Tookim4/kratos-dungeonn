import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'

const Footer = ()=> {
  return (
    <footer className="main-footer">
    {/* <Container> */}
      <div className='footer-div'>
        <p>&copy; {new Date().getFullYear()} Copyright:{'TheDungeon'}</p>
        <a href='/'>
          DeathStroke
        </a>
      
      </div>
    {/* </Container> */}
  </footer>
  );
}

export default Footer