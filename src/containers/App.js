import React from 'react';
import PlantillaUno from './plantillas/plantillaUno';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { petSelection } = pages;
  const { cards, visited } = petSelection;
  return (
    <>
      <PlantillaUno
        visited={visited}
        pets={pets}
        page={cards}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
