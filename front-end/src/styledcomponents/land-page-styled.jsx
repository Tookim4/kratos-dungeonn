import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
text-decoration: none;
padding: 10px 20px;
background-color: #2E4F4F;
color: #CBE4DE;
border: 1px solid #CBE4DE;
border-radius: 10px;
transition: 0.6s ease;

  &:hover{
    background-color: #CBE4DE;
    color: #2C3333;
  }
`
