import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import {toast} from 'react-toastify'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/authSlice';

const SignUpForm = ()=> {
  const [data, setData] = useState({
    name: "",
    email:"",
    password:"",
    password2:"",
  })
  const {name, email, password, password2} = data

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      return (message)
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
  const onSubmit = (e)=>{
    e.preventDefault()
    
    if (password !== password2){
      return ('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <p>loading...</p>
  }
  
  return (
    <div>
    <Container>
    <Card style={{width: '20rem', position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
      <Card.Title style={{margin:'20px'}}>Sign Up</Card.Title>
        <Card.Body>
        <Form onSubmit={onSubmit}>
              <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                  type='text'
                  name='name'
                  value={name}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChange}
                  />
              </InputGroup>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
               type="email" 
               placeholder="Enter email" 
               name='email'
               value={email}
               onChange={onChange}
               />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
               type="password" 
               placeholder="Password" 
               name='password'
               value={password}
               onChange={onChange}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
               type="password" 
               placeholder="Password" 
               name='password2'
               value={password2}
               onChange={onChange}
               />
            </Form.Group>
            
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    
    <Footer/>
    
    </div>
  
   
  );
}

export default SignUpForm;