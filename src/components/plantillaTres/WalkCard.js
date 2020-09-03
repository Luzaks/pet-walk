import React from 'react';
import PropTypes from 'prop-types';
import { RideContainer, RideProperties } from '../../styles/plantillaTresStyle';

const WalkCard = ({ img, cards }) => (
  <RideContainer>
    <RideProperties>

    </RideProperties>
  </RideContainer>
);

WalkCard.propTypes = {
  img: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default WalkCard;
