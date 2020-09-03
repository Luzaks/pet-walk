import React from 'react';
import Home from '../components/plantillaUno/main/Home';

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
    default:
      return null;
  }
};

export default mainHelper;
