import React, {useEffect} from 'react';
import NavBar from "../components/nav-bar"
import Footer from "../components/Footer"

// import {Row, Col} from 'react-bootstrap';
// import { MDBContainer } from 'mdb-react-ui-kit';
import {Div, MainDiv, Button} from '../styledcomponents/land-page-styled'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/authSlice';
import CursorInteract from '../components/cursorInteract';

const LandPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, message} = useSelector(
    (state) => state.auth
  )

    useEffect(() => {
      if(isError){
        console.log(message)
      }
    
      if(!user){
        navigate('/')
      }

      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading){
      return <p>Loading</p>
    }
    
  return (
    <>
        <Div>
          {/* <div style={{flexGrow:'1'}}> */}
          <NavBar/>
          {/* <CursorInteract> */}
              <MainDiv className="main-div">
                {user ? ( 
                  <div className="text-center">
                    <h1 className="display-4 mb-2">Hi {user.name}, ssup.</h1>
                    <p className=" mb-5">
                    Welcome back to the Dojo xx...
                    </p>
                    <a href="#about" className="btn btn-primary btn-lg">
                      Learn More
                    </a>
                  </div> ) : (
                  <div className="text-center">
                    <h1 className="display-2 mb-2">Welcome to the Dungeon</h1>
                    <p className=" mb-3">
                        Feeling lost?
                        Don't worry, <br /> just sign-up or login from the navigation bar and start writing anything. <br />
                        thank me later xx.
                    </p>
                    <Button to={'/pages/signup-page'}>
                      Sign Up             
                    </Button>
                </div>
                )}
              </MainDiv>
             {/* </CursorInteract> */}
             {/* </div> */}
            
        </Div>
        <Footer />
          </>
  )
}

export default LandPage
