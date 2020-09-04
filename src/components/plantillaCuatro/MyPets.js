import React from 'react';
import PropTypes from 'prop-types';
import { BodyTitle } from '../../styles/plantillaUnoStyle';

const MyPets = ({ visited }) => (
  <>
    <BodyTitle>
      <h1>{visited}</h1>
    </BodyTitle>
  </>
);

MyPets.propTypes = {
  visited: PropTypes.string.isRequired,
};

export default MyPets;
