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
    max-height: 812px;
    width: 100%;
    height: 100%;
    background-color: #F1F3F6;
  }
  #root {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  Container,
};

export default GlobalStyles;
