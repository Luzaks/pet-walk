import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  PetCard,
  ArrowCard,
} from '../../styles/plantillaDosStyle';
import { Image, ImageContainer, StatsTitle } from '../../styles/plantillaUnoStyle';
import { LeftArrow, RightArrow } from '../svgs/selectArrows';

const Selection = ({ pets }) => {
  const { name, img } = pets;
  return (
    <Card>
      <PetCard>
        <ArrowCard>
          <LeftArrow />
        </ArrowCard>
        <Image img={img}>
          <ImageContainer />
        </Image>
        <ArrowCard>
          <RightArrow />
        </ArrowCard>
      </PetCard>
      <StatsTitle>
        {name}
      </StatsTitle>
    </Card>
  );
};

Selection.propTypes = {
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Selection;
