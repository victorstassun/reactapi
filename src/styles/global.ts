import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: white;
  }
  
  body {
    width: 100vw;
    background: rgb(201, 201, 201, 0.35);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
 
  button {
    cursor: pointer;
  }

`;