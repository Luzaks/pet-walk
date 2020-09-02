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

const Card = styled(BodyGeneralContainer)`
  height: 70%;
  padding: 0;
  border: 2px double #fff;
  border-radius: 7px;
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

export {
  Properties,
  BodyTitle,
  Dash,
  Card,
  MiniCard,
  PetInfo,
  Text,
  Image,
};
