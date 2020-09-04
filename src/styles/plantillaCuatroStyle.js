import styled from 'styled-components';

const BodyGeneralContainer = styled.div`
  display: flex;
  font-family: Proxima, sans-serif;
  letter-spacing: -0.1rem;
  width: 100%;
  padding: 0 4%;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Dash = styled(BodyGeneralContainer)`
  flex-direction: column;
  height: 57%;
`;

const DogsCont = styled(Display)`
  width: 100%;
  height: 37.5%;
`;

const CatsCont = styled(Display)`
  width: 100%;
  height: 64.5%;
`;

const AddButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  outline: none; 
  color: #fff;
  background-color: #6ea8ff;
  box-shadow: inset 12px 12px 70px -30px #fff;
`;

export {
  Dash,
  DogsCont,
  CatsCont,
  AddButton,
};
