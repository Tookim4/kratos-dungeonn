import styled, {createGlobalStyle} from 'styled-components'
import landimg from '../images/3img.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

export const Div = styled.div`
  min-height: 100%;
  display: flex ;
  flex-direction; column;
  background-image: url(${landimg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  box-sizing: content-box;
`
