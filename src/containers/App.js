import React from 'react';
import PlantillasTemplate from './plantilla';
import GlobalStyles from '../styles/globalStyles';
import initialState from '../state/initialState';

const App = () => {
  const { pets, pages } = initialState;
  const { home } = pages;
  const { visited } = home;
  return (
    <>
      <PlantillasTemplate
        visited={visited}
        pets={pets}
        page={home}
      />
      <GlobalStyles />
    </>
  );
};

export default App;
