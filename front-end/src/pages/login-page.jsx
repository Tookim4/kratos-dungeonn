import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import {toast} from 'react-toastify'
import Card from 'react-bootstrap/Card';
// import {toast} from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer'
import { login, reset } from '../features/authSlice';

const LoginForm = ()=> {
  const [data, setData] = useState({
    email: 'email',
    password: 'password'
  })
  const {email ,password} = data 


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

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <>
    <Container >
      <Card style={{width: '20rem', position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
      <Card.Title style={{margin:'20px'}}>Login details <small>(if registered)</small></Card.Title>
      <Card.Body>
      <Form onSubmit={onSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
             type="email"
             name='email'
             value={email}
             onChange={onChange} 
             placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password" 
             name='password'
             value={password}
             onChange={onChange}
             placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
        
        </Card>

        
    </Container>
    <Footer style={{position:'absolute', margin:'0'}}/>
    </>
  );
}

export default LoginForm;