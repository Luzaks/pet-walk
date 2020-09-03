import React from 'react';
import Home from '../components/plantillaUno/Home';
import PetSelection from '../components/plantillaDos/PetSelection';

const mainHelper = (visited, pets, page) => {
  switch (visited) {
    case 'Home':
      return (
        <Home
          visited={visited}
          pets={pets}
          page={page}
        />
      );
    case 'Pet selection':
      return (
        <PetSelection
          visited={visited}
          pets={pets}
          page={page}
        />
      );
    default:
      return null;
  }
};

export default mainHelper;
