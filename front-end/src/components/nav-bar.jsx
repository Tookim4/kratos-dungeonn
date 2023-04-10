import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import {logout, reset} from '../features/authSlice'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const NavBar = ()=> {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
     
    }
  }, []);

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
          <Link className='nav-link'>
            {user.name}
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