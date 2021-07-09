import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background: rgb(255, 255, 255);
    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
  }
  
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
 
  button {
    cursor: pointer;
  }

`;