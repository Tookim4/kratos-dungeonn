import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const NavBar = ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kratos Dungeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* //login link/ */}
         
            <Link className='nav-link' to={'/pages/login-page'}>
              Login
            </Link>
             
            
              {      /* sign up link */}  
            <Link className='nav-link' eventkey={2} to={'/pages/signup-page'}>
              Sign Up
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;