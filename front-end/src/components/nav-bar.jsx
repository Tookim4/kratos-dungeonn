import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {logout, reset} from '../features/authSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from './UserProfile';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'

const NavBar = ()=> {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (user) {
     
    }
  }, []);

  const handleShowCard = () => {
    // e.preventDefault()
    setShowCard(true);
  }

  const handleCloseCard = () => {
    // e.preventDefault()
    setShowCard(false);
  }


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' style={{background: '#2E4F4F', color: '#CBE4DE'}}>
      <Container>
        <Navbar.Brand href="/" style={{color: '#CBE4DE'}}>Kratos Dungeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto" style={{position: 'absolute', background: '#2E4F4F', right: '10%', margin: '20px', padding: '5px', color: '#CBE4DE', transition: '0.5s'}}>
            {/* //login link/ */}
     
            <Link className='nav-link' style={{color: '#CBE4DE'}} to={'/pages/about-page'}>
              About
            </Link>
         {user ? (
          <>
           {/* <Link className='nav-link' to={'/pages/image-page'}>
              Images
            </Link> */}
            <Link className='nav-link' to={'/pages/notes-page'}>
              Notes
            </Link>
          <Link className='nav-link' onClick={handleShowCard} >
           <i className="lni lni-user" ></i>
          </Link>
          
          <>
      {/* <Button variant="primary" onClick={handleShowCard}>
        Launch demo modal
      </Button> */}

      <Modal size="sm" show={showCard} onHide={handleCloseCard}>
        <Modal.Header closeButton>
          {/* <Modal.Title>User Profile</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <UserProfile/>
        </Modal.Body>
        <Modal.Footer>
          <button className='logout-btn' onClick={onLogout}>
            Logout
            </button>
        </Modal.Footer>
      </Modal>
      </>
           
            
          </>
         ):(<>
            <Link className='nav-link' style={{color: '#CBE4DE'}} to={'/pages/login-page'}>
              Login
            </Link>
             
            <Link className='nav-link' eventkey={2} style={{color: '#CBE4DE'}} to={'/pages/signup-page'}>
              Sign Up
            </Link>
         </>
         )}
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;