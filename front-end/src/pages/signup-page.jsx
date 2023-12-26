import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/authSlice';
import { Button } from '../styledcomponents/land-page-styled';
import './style.scss'
import NavBar from '../components/nav-bar';
import { leapfrog } from 'ldrs'

const SignUpForm = ()=> {
  const [data, setData] = useState({
    name: "",
    email:"",
    password:"",
    password2:"",
  })
  const {name, email, password, password2} = data

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

  return (
    <div>
      <NavBar/>
    <Container>
    <Card style={{width: '20rem', position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', border: '0px'}}>
      <h3 style={{marginBottom:'20px'}} className='signup-header'>Sign Up</h3>
        <Card.Body className='card-body'>
        <Form onSubmit={onSubmit}>
              <InputGroup className="mb-3 form-group">
                  <input
                  type='text'
                  name='name'
                  value={name}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChange}
                  className='form-input'
                  />
              </InputGroup>

            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <input
               type="email" 
               placeholder="Enter email" 
               name='email'
               value={email}
               onChange={onChange}
               className='form-input'
               />
               <br />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <input
               type="password" 
               placeholder="Password" 
               name='password'
               value={password}
               onChange={onChange}
               className='form-input'
               />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicConfirmPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <input
               type="password" 
               placeholder="Confirm Password" 
               name='password2'
               value={password2}
               onChange={onChange}
               className='form-input'
               />
            </Form.Group>
            
            <Button type="submit" >
              Submit
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
    <Footer/>
    </div> 
  );
}

export default SignUpForm;