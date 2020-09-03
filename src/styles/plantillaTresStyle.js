import styled from 'styled-components';

const RideCard = styled.div`
  width: 100%;
  height: 72.5%;
  padding: 0 4%;
`;

const RideContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 30px;
  box-shadow: inset 14px 16px 65px -13px rgb(1241, 243, 246),
              inset 38px -33px 102px -50px #fff,
              21px 21px 28px -16px rgba(110, 168, 255, 0.2),
              -29px -15px 65px -13px #fff;
`;

const RideProperties = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  border-radius: 40px 40px 0 0;
  border-bottom: 1px solid #fff;
`;

const PropertyCont = styled.div`
  font-family: Proxima, sans-serif;
  letter-spacing: -0.1rem;
  width: 33.33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WalkAmount = styled.h3`
  color: #1d6ce3;
  margin-bottom: 5%;
`;

const WalkProp = styled.span`
  color: #77787b;
  font-size: 13px;
`;

export {
  RideCard,
  RideContainer,
  RideProperties,
  PropertyCont,
  WalkAmount,
  WalkProp,
};
