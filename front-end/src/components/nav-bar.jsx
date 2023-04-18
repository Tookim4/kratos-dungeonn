import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {logout, reset} from '../features/authSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from './UserProfile';
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

  const handleShowCard = (e) => {
    e.preventDefault()
    setShowCard(true);
  }

  const handleCloseCard = (e) => {
    e.preventDefault()
    setShowCard(false);
  }


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Kratos Dungeon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* //login link/ */}
         {user ? (
          <>
          <Link className='nav-link' onClick={handleShowCard}>
            {user.name}
          </Link>
            {showCard && (
              <div className="overlay">
                <div className="modal">
                  <button className="close" onClick={handleCloseCard}>
                    &times;
                  </button>
                <UserProfile
                // // imageUrl="https://example.com/image.jpg"
                // name={user.name}
                // email={user.email}
                />
                </div>
              </div>
            )}
            <Link className='nav-link' to={'/pages/image-page'}>
              Images
            </Link>
            <Link className='nav-link' to={'/pages/notes-page'}>
              Notes
            </Link>
            <button className='nav-link btn' onClick={onLogout}>
            Logout
            </button>
          </>
         ):(<>
            <Link className='nav-link' to={'/pages/login-page'}>
              Login
            </Link>
             
            <Link className='nav-link' eventkey={2} to={'/pages/signup-page'}>
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