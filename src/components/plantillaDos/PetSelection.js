import React from 'react';
import PropTypes from 'prop-types';

const PetSelection = ({ visited, pets, page }) => (
  <>
    {console.log(visited)}
  </>
);

PetSelection.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PetSelection;
