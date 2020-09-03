import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyTitle, Dash,
  SectionTitle,
} from '../../styles/plantillaUnoStyle';
import Selection from './Selection';
import StartButton from '../plantillaUno/main/StartButton';

const PetSelection = ({ visited, pets, page }) => (
  <>
    <BodyTitle>
      <h1>{'<-'}</h1>
    </BodyTitle>
    <Dash>
      <SectionTitle>
        {visited}
      </SectionTitle>
      <Selection
        pets={pets}
      />
    </Dash>
    <StartButton />
  </>
);

PetSelection.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PetSelection;
