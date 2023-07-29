import styled, {createGlobalStyle} from 'styled-components'
import landimg from '../images/3img.jpg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export const Div = styled.div`
  /* min-height: 100%; */
  /* display: flex ;
  flex-direction: column; */
  /* background-color: #2E4F4F; */
  background-image: url(${landimg});
  background-size: cover;
  background-position: center;
  /* overflow: hidden; */
  /* height: 100vh; */
  /* box-sizing: content-box; */
`

export const MainDiv = styled.div`
height: 100vh;
  display: flex;
  /* background-color: #2E4F4F; */
  /* margin-top: 40%; */
  align-items: center;
  justify-content: center;
  color: #CBE4DE;
`
export const Button = styled(Link)`
text-decoration: none;
padding: 10px 20px;
background-color: #2E4F4F;
color: #CBE4DE;
border: 1px solid #CBE4DE;
border-radius: 20px;
transition: 0.6s ease;

  &:hover{
    background-color: #CBE4DE;
    color: #2C3333;
  }
`
