import React from 'react';
import PlantillaUno from './plantillas/plantillaUno';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { home } = pages;
  return (
    <>
      <PlantillaUno
        pets={pets}
        page={home}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
