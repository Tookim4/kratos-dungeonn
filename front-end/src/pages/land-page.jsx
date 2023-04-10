import React, {useEffect} from 'react';
import NavBar from "../components/nav-bar"
import Footer from "../components/Footer"
import Container from 'react-bootstrap/Container';
// import { MDBContainer } from 'mdb-react-ui-kit';
import landimg from '../images/3img.jpg'
import {WelcomeDiv} from '../styledcomponents/land-page-styled'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/authSlice';

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
    <div>
        <div className='' style={{backgroundImage:`url(${landimg})`, backgroundSize: 'cover', height: '100vh', margin:'0 auto', padding:'0'}}>
        <NavBar/>
           <Container style={{ display:'flex', justifyContent:'right', alignItems:'right'}}>
            {user ? (<WelcomeDiv>
                <h1>Hi {user.name}, ssup.</h1>
                <section>
                  <p>Welcome back to your Dojo...
                  </p>
                </section>
                </WelcomeDiv>):(
                  <WelcomeDiv>
                  <h1>Hello, good to see you...</h1>
                  <section>
                    <p>Feeling lost?
                      Don't worry, <br /> just sign-up or login from the navigation bar and start writing anything. <br />
                      thank me later xx.
                    </p>
                  </section>
                  </WelcomeDiv>
                )}
           </Container>
           <Footer/>
        </div>
    </div>
  )
}

export default LandPage
