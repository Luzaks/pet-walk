import React from 'react';
import PropTypes from 'prop-types';
import { BodyTitle } from '../../styles/plantillaUnoStyle';
import { WalkCard } from '../../styles/plantillaTresStyle';
import WalkedButton from './WalkedButton';

const Walk = ({ visited, pets, page }) => (
  <>
    <BodyTitle>
      <h1>{visited}</h1>
    </BodyTitle>
    <WalkCard />
    <WalkedButton />
  </>
);

Walk.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Walk;
