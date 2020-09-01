import styled from 'styled-components';

const Head = styled.div`
  color: #BFC0BF;
  display: flex;
  font-size: 15px;
  font-weight: 700;
  height: 5%;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 87%;
`;

const Footy = styled.div`
  width: 100%;
  height: 8%;
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
