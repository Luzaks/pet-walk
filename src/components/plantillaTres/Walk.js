import React from 'react';
import PropTypes from 'prop-types';
import { BodyTitle } from '../../styles/plantillaUnoStyle';
import { RideCard } from '../../styles/plantillaTresStyle';
import WalkedButton from './WalkedButton';
import WalkCard from './WalkCard';

const Walk = ({ visited, pets, page }) => {
  const { img } = pets;
  const { section, cards } = page;
  return (
    <>
      <BodyTitle>
        <h1>{visited}</h1>
      </BodyTitle>
      <RideCard>
        <WalkCard img={img} cards={cards} />
      </RideCard>
      <WalkedButton
        section={section}
      />
    </>
  );
};

Walk.propTypes = {
  visited: PropTypes.string.isRequired,
  pets: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Walk;
