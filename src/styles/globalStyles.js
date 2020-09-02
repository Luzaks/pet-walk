import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'My custom family';
    src: url('../assets/fonts/Proxima.otf');
  }
  
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
  
  .icon {
    margin: 0 3px;  
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Head = styled.div`
  color: #BFC0BF;
  display: flex;
  font-size: 15px;
  font-weight: 700;
  height: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  flex-direction: column;
`;

const Footy = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  border-radius: 20px 20px 0 0;
  background-color: #D1FFFD;
  box-shadow: 0px -10px 47px 0px #E5E6E8;
`;

export {
  Container,
  Head,
  Body,
  Footy,
};

export default GlobalStyles;
