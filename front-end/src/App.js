import React  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line 
import LandPage from "./pages/land-page"; 
import LoginPage from './pages/login-page';
import SignUpForm from './pages/signup-page';

const App = ()=> { 
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={LandPage}/>
            <Route path='pages/login-page' Component={LoginPage}/>
            <Route path='pages/signup-page' Component={SignUpForm}/>
          </Routes>
      </BrowserRouter>
        {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
