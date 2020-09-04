import React from 'react';
import PlantillasTemplate from './plantilla';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { myPets } = pages;
  const { visited } = myPets;
  return (
    <>
      <PlantillasTemplate
        visited={visited}
        pets={pets}
        page={myPets}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
