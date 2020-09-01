import styled from 'styled-components';

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

const Properties = styled.div`
  font-family: Proxima, sans-serif;
  display: flex;
  width: fit-content;
`;

export {
  Head,
  Body,
  Footy,
  Properties,
};
