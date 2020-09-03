import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '../../styles/globalStyles';
import Home from '../plantillaUno/main/Home';

const Main = ({ visited, pets, page }) => (
  <Body>
    <Home
      visited={visited}
      pets={pets}
      page={page}
    />
  </Body>
);

Main.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Main;
