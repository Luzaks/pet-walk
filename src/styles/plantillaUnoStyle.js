import styled from 'styled-components';

const Properties = styled.div`
  font-family: Proxima, sans-serif;
  display: flex;
  width: fit-content;
`;

const BodyGeneralContainer = styled.div`
  display: flex;
  font-family: Proxima, sans-serif;
  letter-spacing: -0.1rem;
  width: 100%;
  padding: 0 4%;
`;

const BodyTitle = styled(BodyGeneralContainer)`
  font-weight: 900;
  height: 10%;
  align-items: center;
`;

const Dash = styled(BodyGeneralContainer)`
  height: 20%;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  position: relative;
  top: 0;
  z-index: 2;
`;

const Card = styled(BodyGeneralContainer)`
  height: 97px;
  padding: 0;
  border: 2px double #fff;
  border-radius: 7px;
  box-shadow: inset 14px 16px 65px -13px rgba(0,0,0,0.09),
              inset 38px -33px 102px -50px #fff,
              43px 36px 53px -36px rgba(0,0,0,0.21),
              -29px -15px 65px -13px #fff;
`;

const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28%;
  height: 100%;
`;

const PetInfo = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4% 2%;
`;

const Text = styled.p`
  width: 100%;
  font-size: 11px;
  color: #727377;
  letter-spacing: 0.01rem;
`;

const Image = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px double #fff;
  background-image: url(${props => props.img});
  background-position: 35% 20%;
`;

const MoodCont = styled(BodyGeneralContainer)`
  width: fit-content;
`;

const Circle = styled.div`
  width: 6.5px;
  height: 6.5px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: #1d6ce3;
`;

const BlackText = styled(Text)`
  color: #1d6ce3;
  width: fit-content;
  margin-top: 3%;
`;

const StatsCont = styled(BodyGeneralContainer)`
  height: 52.5%;
  flex-direction: column;
  justify-content: space-between;
`;

const StatsDescription = styled(BodyGeneralContainer)`
  width: 60%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 6%;
`;

const StatsTitle = styled.h4`
  font-weight: 600;
  letter-spacing: 0;
`;

const ButtonCont = styled(BodyGeneralContainer)`
  height: 17.5%;
  align-items: center;
  justify-content: center;
`;

const WalkButton = styled.button`
  width: 331px;
  height: 53px;
  border: none;
  outline: none;
  stroke: none;
  border-radius: 40px;
  font-family: Proxima, sans-serif;
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  background-color: #6ea8ff;
  box-shadow: inset  13px 13px 70px -30px #fff;
`;

const ProgressCont = styled(BodyGeneralContainer)`
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export {
  Properties,
  BodyTitle,
  Dash,
  SectionTitle,
  Card,
  MiniCard,
  PetInfo,
  Text,
  Image,
  MoodCont,
  Circle,
  BlackText,
  StatsCont,
  StatsDescription,
  StatsTitle,
  ButtonCont,
  WalkButton,
  ProgressCont,
};
