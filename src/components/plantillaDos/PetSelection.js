import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyTitle,
  Dash,
  SectionTitle,
} from '../../styles/plantillaUnoStyle';
import Selection from './Selection';
import StartButton from '../plantillaUno/StartButton';
import Sections from '../globales/Sections';
import { BackArrow } from '../svgs/methodSVGS';

const PetSelection = ({ visited, pets, page }) => (
  <>
    <BodyTitle>
      <BackArrow />
    </BodyTitle>
    <Dash>
      <SectionTitle>
        {visited}
      </SectionTitle>
      <Selection
        pets={pets}
      />
    </Dash>
    <Sections page={page} />
    <StartButton />
  </>
);

PetSelection.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PetSelection;
