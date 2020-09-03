import styled from 'styled-components';

const BodyGeneralContainer = styled.div`
  display: flex;
  font-family: Proxima, sans-serif;
  letter-spacing: -0.1rem;
  width: 100%;
  padding: 0 4%;
`;

const Card = styled(BodyGeneralContainer)`
  height: 108px;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PetCard = styled.div`
  width: 70%;
  height: calc(100% - 28px);
  display: flex;
  justify-content: space-between;
`;

const ArrowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 100%;
`;

export {
  Card,
  PetCard,
  ArrowCard,
};
