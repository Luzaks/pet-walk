import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export {
  Container,
};

export default GlobalStyles;
