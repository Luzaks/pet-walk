import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    max-width: 416px;
    max-height: 736px;
    width: 100%;
    height: 100%;
    border: 1px blue solid;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
