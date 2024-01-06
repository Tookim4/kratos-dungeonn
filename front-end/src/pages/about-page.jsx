import React from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import './style.scss'

const aboutPage = () => {
  return (
    <div className='about-page'>
        <NavBar/>

            <div className="about-content">
                <p>Hey hi, welcome to the dungeon. This is a simple notebook where you can basically write and save anything. At the moment, this is just a test project for my MERN development skills and therefore, there is nothing much to do really. The authentication system is super safe so yoru details are well protected. I am certain there will be major improvements made to the application in future.   
                </p>
                <p>
                  Thank you for your visit!!
                </p>
            </div>

        <Footer/>
    </div>
  )
}

export default aboutPage