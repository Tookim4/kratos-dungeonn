import React from 'react';
import NavBar from "../components/nav-bar"
import Footer from "../components/Footer"
import Container from 'react-bootstrap/Container';
// import { MDBContainer } from 'mdb-react-ui-kit';
import landimg from '../images/3img.jpg'
import {WelcomeDiv} from '../styledcomponents/land-page-styled'

const LandPage = () => {
  return (
    <div>
        <div className='' style={{backgroundImage:`url(${landimg})`, backgroundSize: 'cover', height: '100vh', margin:'0 auto', padding:'0'}}>
        <NavBar/>
           <Container style={{ display:'flex', justifyContent:'right', alignItems:'right'}}>
            <WelcomeDiv>
                <h1>Hi, good to see you...</h1>
                <section>
                  <p>Feeling lost?
                    Don't worry, <br /> just sign-up or login from the navigation bar and start writing anything. <br />
                    thank me later xx.
                  </p>
                </section>
            </WelcomeDiv>
           </Container>
           <Footer/>
        </div>
    </div>
  )
}

export default LandPage
