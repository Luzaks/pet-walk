import styled from 'styled-components';

const RideCard = styled.div`
  width: 100%;
  height: 72.5%;
  display: flex;
  justify-content: center;
  padding: 0 4%;
`;

const RideContainer = styled.div`
  width: 343px;
  height: 100%;
  background: url(${props => props.map}) center center no-repeat;
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 28px;
  box-shadow: 21px 21px 28px -16px rgba(110, 168, 255, 0.2),
              -29px -15px 65px -13px #fff;
`;

const RideProperties = styled.div`
  width: 100%;
  height: 17%;
  background-color: #f1f3f6;
  display: flex;
  border-radius: 28px 28px 0 0;
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

const RideCont = styled.div`
  width: 100%;
  height: 83%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 0 0 28px 28px;
`;

const RideSVG = styled.svg`
  position: relative;
  left: calc(50% - 125px);
  top: calc(50% - 95px);
`;

const PositionIcon = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  bottom: 1%;
  border-radius: 50%;
  background: url(${props => props.icon}) center center no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 161px 16px rgba(0,0,0,0.43);
`;

export {
  RideCard,
  RideContainer,
  RideProperties,
  PropertyCont,
  WalkAmount,
  WalkProp,
  RideCont,
  RideSVG,
  PositionIcon,
};
