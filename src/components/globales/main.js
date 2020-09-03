import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '../../styles/globalStyles';
import mainHelper from '../../helpers/mainHelper';

const Main = ({ visited, pets, page }) => (
  <Body>
    {
      mainHelper(visited, pets, page)
    }
  </Body>
);

Main.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Main;
