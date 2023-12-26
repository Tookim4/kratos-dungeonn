import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import { login, reset } from '../features/authSlice';
import NavBar from '../components/nav-bar';
import { Button } from '../styledcomponents/land-page-styled';
import { leapfrog } from 'ldrs'



const LoginForm = ()=> {
  const [data, setData] = useState({
    email: 'email',
    password: 'password'
  })
  const {email ,password} = data 

  leapfrog.register()

  const navigate = useNavigate()
  const dispatch = useDispatch() 

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  ) 

  useEffect(() => {
    if (isError) {
     console.log(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e)=>{
    setData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  
  const onSubmit = (e) =>{
    e.preventDefault()
    
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }


  return (
    <>
    <NavBar/>
    <Container >
      <Card style={{width: '20rem', position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', border: '0px'}}>
      <h3 style={{marginBottom:'20px'}} className='signup-header'>Login</h3>
      <Card.Body>
      <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
             type="email"
             name='email'
             value={email}
             onChange={onChange} 
             placeholder="Enter email" 
             className='form-input'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
             type="password" 
             name='password'
             value={password}
             onChange={onChange}
             placeholder="Password" 
             className='form-input'/>
          </Form.Group>
          
          <Button type="submit">
            Login
          </Button>

          {isLoading && (
          <div className="loading">
              <l-leapfrog
              size="40"
              speed="2.5" 
              color="#2E4F4F" 
            ></l-leapfrog>
          </div>
          )}
          
        </Form>
      </Card.Body>
        
        </Card>

        
    </Container>
    <Footer style={{position:'absolute', margin:'0'}}/>
    </>
  );
}

export default LoginForm;