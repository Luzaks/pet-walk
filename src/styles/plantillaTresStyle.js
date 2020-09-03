import styled from 'styled-components';

const RideCard = styled.div`
  width: 100%;
  height: 72.5%;
  padding: 0 4%;
  border: 1px solid black;
`;

const RideContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 40px;
  box-shadow: inset 14px 16px 65px -13px rgb(1241, 243, 246),
              inset 38px -33px 102px -50px #fff,
              21px 21px 28px -16px rgba(110, 168, 255, 0.2),
              -29px -15px 65px -13px #fff;
`;

const RideProperties = styled.div`
  width: 100%;
  height: 17%;
  border-radius: 40px 40px 0 0;
  border-bottom: 1px solid #fff;
`;

export {
  RideCard,
  RideContainer,
  RideProperties,
};
