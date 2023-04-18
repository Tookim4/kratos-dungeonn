import React  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line 
import LandPage from "./pages/land-page"; 
import LoginPage from './pages/login-page';
import SignUpForm from './pages/signup-page';
import notesPage from './pages/notes-page';
import imagePage from './pages/image-page';
import { GlobalStyle } from './styledcomponents/land-page-styled';

const App = ()=> { 
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={LandPage}/>
            <Route path='pages/login-page' Component={LoginPage}/>
            <Route path='pages/signup-page' Component={SignUpForm}/>
            <Route path='pages/notes-page' Component={notesPage}/>
            <Route path='pages/image-page' Component={imagePage}/>
          </Routes>
      </BrowserRouter>
        {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
