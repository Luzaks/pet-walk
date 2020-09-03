import React from 'react';
import PlantillasTemplate from './plantilla';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { walk } = pages;
  const { visited } = walk;
  return (
    <>
      <PlantillasTemplate
        visited={visited}
        pets={pets}
        page={walk}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
