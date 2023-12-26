import React from 'react';
import './style.css'

const Footer = ()=> {
  return (
    <footer className="main-footer">
      <div className='footer-div'>
        <p>&copy; {new Date().getFullYear()} Copyright: {'Death_stroke'}</p>
      </div>
  </footer>
  );
}

export default Footer