import React from 'react';
import PlantillasTemplate from './plantilla';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { home } = pages;
  const { cards, visited } = home;
  return (
    <>
      <PlantillasTemplate
        visited={visited}
        pets={pets}
        page={cards}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
