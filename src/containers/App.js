import React from 'react';
import PlantillaUno from './plantillas/plantillaUno';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets } = initialState;
  return (
    <>
      <PlantillaUno state={pets} />
      <GlobalStyles />
    </>
  );
};

export default App;
