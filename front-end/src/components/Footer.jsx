import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';


const Footer = ()=> {
  return (
    <MDBFooter bgColor='none' className='text-center text-lg-left fixed-bottom'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          DeathStoke
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer