import React from 'react';
import PlantillasTemplate from './plantilla';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { petSelection } = pages;
  const { visited } = petSelection;
  return (
    <>
      <PlantillasTemplate
        visited={visited}
        pets={pets}
        page={petSelection}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
